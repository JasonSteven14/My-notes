import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {

  noteForm: FormGroup;

  title: string;
  description: string;

  formErrors = {
    title: '',
    description: ''
  };

  validationMessages = {
    title: {
      required: 'Give your note a name'
    },
    description: {
      required: 'What you want remember'
    }
  };

  constructor(
    private fb: FormBuilder,
    public mddissmis: ModalController,
    private serviceNote: NoteService
  ) {
    this.createForm();
  }

  ngOnInit() {

   }

  createForm() {
    this.noteForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
    this.noteForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.noteForm) { return; }
    const form = this.noteForm;

    // tslint:disable-next-line: forin
    for (const field in this.formErrors) {
      this.formErrors[field] = '';

      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const message = this.validationMessages[field];

        // tslint:disable-next-line: forin
        for (const key in control.errors) {
          this.formErrors[field] += message[key] + '';
        }
      }
    }
  }
  dissmisModal() {
    this.mddissmis.dismiss();
  }


  createNote() {
    // TODO: add addNotes function to notesService

    this.mddissmis.dismiss();
  }
}
 /*
  1. se toman los datos de el formulario como nota
  2. se llama al servicio de notas para añadirla a la base de datos
  3. se actualiza la nota en home component para viualizar la nota
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  NoteGroup: FormGroup;

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
    this.NoteGroup = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
    this.NoteGroup.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.NoteGroup) { return; }
    const form = this.NoteGroup;

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
    console.log('button press');
    this.mddissmis.dismiss();
  }


  createNote() {
    // TODO: add addNotes function to notesService
    // this.serviceNote.addNote();
    this.mddissmis.dismiss();
  }
}

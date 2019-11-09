import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { NoteService } from '../services/note.service';
import { Note } from '../shared/note';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  notesList: Note[];

  constructor(
    private modal: ModalController,
    private serviceNote: NoteService,
    private router: Router,
    private loadingController: LoadingController,
    private strgservices: StorageService
  ) { }

  ngOnInit() {
    this.strgservices.firebaseCreateNote();
    this.serviceNote.getNotes().subscribe((notes: Note[]) => {
      this.notesList = notes;
    });
  }


  async openModal() {
    const modal = await this.modal.create({
      component: ModalComponent
    });
    return await modal.present();
  }

  async onOpenNoteDetail(note) {
    const loading = await this.loadingController.create({
      message: 'Loading Note',
      duration: 3000
    });
    await loading.present().then(
      () => {
        this.router.navigate(['/note-detail'], {
          queryParams: {
            note: JSON.stringify(note)
          }
        }
        );
      }
    );
  }

  /*1.Se pulsa sobre una nota

  2. Se muestra un spinner de Loading(LoadingController)

  3. Se llama al servicio de getNote()

  4. Si la respuesta ha ido bien se quita el Loading y se abre la página del detalle

  5. Sí ha habido un error en la llamada al servicio se quita el Loading y se muestra una alerta de error*/

}

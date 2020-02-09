import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, AlertController } from '@ionic/angular';
import { AddNoteComponent } from '../add-note/add-note.component';
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

  notesList: any;

  constructor(
    private modal: ModalController,
    private noteService: NoteService,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private storageservice: StorageService
  ) { }

  ngOnInit() {
    this.noteService.getNotes().subscribe((notes: Note[]) => {
      this.notesList = notes;
    });
  }

  async openModal() {
    const modal = await this.modal.create({
      component: AddNoteComponent
    });
    return await modal.present();
  }

  // 1.Se pulsa sobre una nota
  async onOpenNoteDetail(note: Note) {
    // 2. Se muestra un spinner de Loading(LoadingController)
    const loading = await this.loadingController.create({
      message: 'Loading Note'
    });
    await loading.present();

    // 3. Se llama al servicio de getNote()
    this.noteService.getNote(note.id).subscribe((noteDetail: Note) => {
      loading.dismiss();
      // 4. Si la respuesta ha ido bien se quita el Loading y se abre la página del detalle
      this.router.navigate(['/note-detail'], {
        queryParams: {
          note: JSON.stringify(noteDetail)
        }
      });
    }, async (err) => {
      loading.dismiss();
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'An error has happened, please try later.',
        buttons: ['OK']
      });
      alert.present();
    });
  }
  // ////////TODO///////// //

  // create a method wich will generate a random color //


  // getRandomColor() {
  //   const letters = '0123456789ABCDEF';
  //   let color = '#';
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  // }

  // setColor() {
  //   let card = document.querySelector('.cardContent');
  // }

  // List TODO

}

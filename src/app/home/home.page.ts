import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { NoteService } from '../services/note.service';
import { Note } from '../shared/note';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit() {
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

  onOpenNoteDetail(note: Note) {
    console.log(note.id);
    this.router.navigate(['/note-detail'], {
      queryParams: {
        note: JSON.stringify(note)
      }
    });
  }

}

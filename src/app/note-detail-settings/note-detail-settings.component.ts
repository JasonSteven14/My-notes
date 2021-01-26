import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NoteService } from '../services/note.service';
import { Note } from '../shared/note';

@Component({
  selector: 'app-note-detail-settings',
  templateUrl: './note-detail-settings.component.html',
  styleUrls: ['./note-detail-settings.component.scss'],
})
export class NoteDetailSettingsComponent implements OnInit {

  @Input() note: Note;

  constructor(private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private noteServices: NoteService) { }

  ngOnInit() { }

  closeModal() {
    this.modalController.dismiss();
  }

  deleteNote() {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log("params: ", params.note);
      this.note = JSON.parse(params.note)
    })
    console.log("Deleting note...")
    this.noteServices.deleteNote(this.note.id)
  }
}

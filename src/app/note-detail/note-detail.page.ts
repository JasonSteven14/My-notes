import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../shared/note';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.page.html',
  styleUrls: ['./note-detail.page.scss'],
})
export class NoteDetailPage implements OnInit {

  note: Note;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {

   }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params.note) {
        this.note = JSON.parse(params.note);
      }
    });
  }

  /*
  1. añadir un boton en la parte superior derecha
    1. 2. el boton abre un modal que permite modificar la nota o borrarla
  2. añadir la fecha de creacion de la nota
   2.1 añadir ultima fecha de modificacion
  3.
  */

}

import { Injectable } from '@angular/core';
import { Note } from '../services/modal-note.component'
import { Storage } from '@ionic/storage'
import { NOTE } from '../shared/data'
import { Observable } from 'rxjs'
import { isNgTemplate } from '@angular/compiler';
import { NgFormSelectorWarning } from '@angular/forms';


const NEW_KEY = 'hola';

@Injectable({
  providedIn: 'root'
})

export class CreateNoteService {


  note: Note;


  constructor(private storage: Storage) { }

  createNoteEx() {
    console.log('creating notedata')
    this.storage.set('jason', 'steven')
  }

  addNote() {
  }

  getNote() {

  }

  updateNote() {

  }

  deleteNote(id: number) {

  }

}

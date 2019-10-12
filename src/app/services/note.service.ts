import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
import { NOTE } from '../shared/data'
import { Observable } from 'rxjs'
import { isNgTemplate } from '@angular/compiler';
import { NgFormSelectorWarning } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})

export class NoteService {


  constructor(private storage: Storage) { }

  createExampleNote() {
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

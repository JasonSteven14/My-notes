import { Injectable } from '@angular/core';
import { NOTE } from '../shared/data'
import { Observable } from 'rxjs'
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})

export class NoteService {

  note = NOTE;
  id: any;

  constructor(private storageService: StorageService)
   { }

   getId() {
     return this.note.find(x => x.id = this.id)
   }

  createExampleNote() {

    console.log('Creating notedata')

    let noteExample = this.storageService.get(this.id).then(()=>{
      val => val
    });
    return noteExample;
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

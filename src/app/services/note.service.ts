import { Injectable } from '@angular/core';
import { NOTE } from '../shared/data'
import { Observable, of } from 'rxjs'
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})

export class NoteService {

 
  constructor(private storageService: StorageService)
   { }

  addNote() {
  }

  getNote(id) {

  }

  getNotes() {
    return of(NOTE);
  }

  updateNote() {

  }

  deleteNote(id: number) {

  }

}

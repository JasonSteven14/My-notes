import { Injectable } from '@angular/core';
import { NOTES } from '../shared/data';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NoteService {

  constructor() { }

  getNotes() {
    return of(NOTES);
  }

  getNote(id: string) {
    return of(NOTES.find(note => id === note.id));
  }

}

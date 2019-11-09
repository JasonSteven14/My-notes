import { Injectable } from '@angular/core';
import { NOTES } from '../shared/data';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NoteService {

  constructor(private http: HttpClient) { }

  getNotes() {
   // return this.http.get('../shared/data');
   return of(NOTES);
  }

  getNote(id: string) {
    // return this.http.get('../shared/data').pipe(note => id === note.id);
  }

  addNote(noteCopy) {
    const newdate = new Date();
    return of([noteCopy, newdate]);
  }

}

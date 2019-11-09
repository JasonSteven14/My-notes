import { Injectable } from '@angular/core';
import { NOTES } from '../shared/data';
import { of, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { delay } from 'rxjs/operators';

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
    return of(NOTES.find(note => {
      return note.id === id;
    })).pipe(delay(1000));
  }

  addNote(noteCopy) {
    const newdate = new Date();
    return of([noteCopy, newdate]);
  }

}

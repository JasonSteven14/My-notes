import { Injectable } from '@angular/core';
 // import { NOTES } from '../shared/data';
import { of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NoteService {

  constructor(private http: HttpClient) { }

  getNotes() {
   // return this.http.get('../shared/data');
  }

  getNote(id: string) {
    // return this.http.get('../shared/data').pipe(note => id === note.id);
  }

}

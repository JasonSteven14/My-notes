import { Injectable } from '@angular/core';
import { NOTES } from '../shared/data';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { delay, debounceTime, filter, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { Note } from '../shared/note';

@Injectable({
  providedIn: 'root'
})

export class NoteService {

  constructor(
    private http: HttpClient,
    private angularFireStore: AngularFirestore
  ) { }

  getNotes() {
    // return this.http.get('../shared/data');
    return of(NOTES);
  }

  getNote(id: string) {
    return of(NOTES.find(note => note.id === id)).pipe(delay(1000));
  }

  addNote(note: Note) {
    NOTES.push(note);
  }

}

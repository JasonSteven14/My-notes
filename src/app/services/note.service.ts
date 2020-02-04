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

  getAddressSuggestion(streetName: string) {
    const addressList: { street: string, postalCode: string }[] = [{
      street: 'Miniaturista Meseguer 21, Benimámet, Valencia, 46035',
      postalCode: '46035'
    }, {
      street: 'Felipe Valls 53, Benimámet, Valencia, 46035',
      postalCode: '46035'
    }, {
      street: 'Martí 16, Valencia, Valencia, 46005',
      postalCode: '46005'
    }];
    const list = addressList.filter(address => address.street.includes(streetName));
    console.log('Address suggestion: ', list);
    return of(list);
    // return throwError('ERROR');
  }

  getInputSuggestions(valueChanges: Observable<string>, fetchFunction: (query: string) => Observable<any>) {
    return valueChanges.pipe(
      debounceTime(250),
      filter(query => query.length >= 2 || query.length === 0),
      distinctUntilChanged(),
      switchMap(value => {
        return value
          ? fetchFunction(value).pipe(catchError(_ => of([])))
          : of([]);
      })
    );
  }
}

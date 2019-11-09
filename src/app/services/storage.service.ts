import { Injectable, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class StorageService implements OnInit {


  db = firebase.database();

  constructor(
  ) {
   }

  ngOnInit() {
  }

  firebaseCreateNote() {
  }
}

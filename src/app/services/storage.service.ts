import { Injectable, OnInit } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class StorageService implements OnInit {


  db = firebase.database();

  constructor(
    private firebasenative: Firebase
  ) { }

  ngOnInit() {

    console.log(this.db);

    this.firebasenative.getToken().then(
      token => console.log(`The token is ${token}`)
      ).catch(
        error => console.log(`User opened a notification`, error)
      );
  }

  firebaseCreateNote() {
    console.log(this.db);
  }
}

import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class StorageService implements OnInit {
  // user = {
  //   email: 'test@hotmail.com',
  //   pass: '132345fsfjs'
  // };

  constructor(private fbAuth: AngularFireAuth
  ) {
   }

  ngOnInit() {
  }

  async getUser(email, pass ) {
   await this.fbAuth.auth.createUserWithEmailAndPassword(email, pass);
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

export type AUTHENTICATION_SERVICE_ERROR = 'INVALID_EMAIL' | 'INVALID_USER' | 'GENERIC';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  promise: AngularFireAuth;
  constructor(private angularAuthentication: AngularFireAuth) {
  }

  isLoged() {
    this.angularAuthentication.auth.onAuthStateChanged((data) => {
      console.log(data);
    });
  }

  async login(email, pass) {
    // this.storageService.loginInAcount(this.logInForm.value)
    return await this.angularAuthentication.auth.signInWithEmailAndPassword(email, pass).then();
  }

  async signup(email, pass) {
    try {
      return this.angularAuthentication.auth.createUserWithEmailAndPassword(email, pass);
    } catch (error) {
      console.log('catch1', error.message);
      throw new Error('INVALID_EMAIL');
    }
  }
}

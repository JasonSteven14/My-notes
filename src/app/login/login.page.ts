import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  isLoginView = true;
  form: FormGroup;

  user = '';
  pass = '';

  constructor(
    private strgService: StorageService,
    private fb: FormBuilder
  ) { }

  setViewLogin() {
    this.isLoginView = true;
  }

  setViewSignup() {
    this.isLoginView = false;
  }

  createForm() {
    this.form = this.fb.group({
      userName: '',
      userPass: ''
    });
  }

  getUser() {
    this.strgService.getUser(this.user, this.pass);
  }

}

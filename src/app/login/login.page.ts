import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  toggle = true;
  form: FormGroup;

  user = '';
  pass = '';

  constructor(private strgService: StorageService,
    private fb: FormBuilder ) {

  }

  ngOnInit() {
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

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

  changeToSign() {
   const sign = document.getElementById('rowSign');
   sign.style.display = 'flex';
   const log = document.getElementById('rowLog');
   log.style.display = 'none';
   const button = document.getElementById('btnSign');
   button.setAttribute('color', 'primary');
   const buttonR = document.getElementById('btnLog');
   buttonR.setAttribute('color', 'light');
  }
  changeToLog() {
    const sign = document.getElementById('rowSign');
    sign.style.display = 'none';
    const log = document.getElementById('rowLog');
    log.style.display = 'flex';
    const button = document.getElementById('btnLog');
    button.setAttribute('color', 'primary');
    const buttonS = document.getElementById('btnSign');
    buttonS.setAttribute('color', 'light');
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

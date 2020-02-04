import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  isLoginView = true;
  errorMessage = '';
  logInForm: FormGroup;
  signUpForm: FormGroup;

  formErrors = {
    Firstname: '',
    Lastname: '',
    Email: '',
    Password: '',
    emailLogInput: '',
    passwordLogInput: ''
  };

  validationMessages = {
    Firstname: {
      required: 'First Name is required.',
      minlength: 'First Name must be at least 2 characters long.',
      maxlength: 'First Name cannot be more than 25 characters long.'
    },
    Lastname: {
      required: 'Last Name is required.',
      minlength: 'Last Name must be at least 2 characters long.',
      maxlength: 'Last Name cannot be more than 25 characters long.'
    },
    Email: {
      required: 'Email is required.',
      pattern: 'Email not in valid format.',
      minlength: 'Last Name must be at least 2 characters long.',
      maxlength: 'Last Name cannot be more than 25 characters long.'
    },
    Password: {
      required: 'Password required',
      minlength: 'Password must be at least 2 characters long.',
      maxlength: 'Password cannot be more than 25 characters long.'
    },
    emailLogInput: {
      required: 'Password required',
      pattern: 'Email not in valid format.',
      minlength: 'Last Name must be at least 2 characters long.',
      maxlength: 'Last Name cannot be more than 25 characters long.'
    },
    passwordLogInput: {
      required: 'Password required',
      minlength: 'Password must be at least 2 characters long.',
      maxlength: 'Password cannot be more than 25 characters long.'
    }
  };

  constructor(
    private authservice: AuthenticationService
  ) {
    this.createForm();
  }

  createForm() {
    this.logInForm = new FormGroup({
      emailLogInput: new FormControl('', [Validators.required, Validators.email, Validators.min(2), Validators.max(15)]),
      passwordLogInput: new FormControl('', [Validators.required, Validators.min(2), Validators.max(15)])
    });

    this.signUpForm = new FormGroup({
      Firstname: new FormControl('', [Validators.required, Validators.min(2), Validators.max(15)]),
      Lastname: new FormControl('', [Validators.required, Validators.min(2), Validators.max(15)]),
      Email: new FormControl('', [Validators.required, Validators.email, Validators.min(2), Validators.max(15)]),
      Password: new FormControl('', [Validators.required, Validators.min(2), Validators.max(15)])
    });
    this.logInForm.valueChanges.subscribe(data => this.onValueChanges(data));
    this.signUpForm.valueChanges.subscribe(data => this.onValueChanges(data));
  }

  onValueChanges(data?: any) {
    if (!data) { return; }
    console.log('this is data 1: ', data);
    const control = this.logInForm.value.emailLogInput;
    // tslint:disable-next-line: forin
    this.formErrors.emailLogInput = this.validationMessages.emailLogInput.required;
    console.log(this.formErrors);
  }

  setViewLogin() {
    this.isLoginView = true;
    this.signUpForm.reset();
  }

  setViewSignup() {
    this.isLoginView = false;
    this.logInForm.reset();
  }

  onSubmitLoginButton() {
    console.log(this.logInForm.value);
    const email = this.logInForm.value.emailLogInput;
    const pass = this.logInForm.value.passwordLogInput;
    this.authservice.login(email, pass).then((data) => { console.log(data); });
  }

  onSubmitSignupButton() {
    const email = this.signUpForm.value.Email;
    const pass = this.signUpForm.value.Password;
    this.authservice.signup(email, pass).then(res => {
      console.log('User created: ', res);
    }).catch(err => {
      console.log('catch pagina: ', err);
    });
  }
}

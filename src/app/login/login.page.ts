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
  showLoginEmailErrors = false;

  formErrors = {
    Firstname: '',
    Lastname: '',
    Email: '',
    Password: '',
    emailLogInput: '',
    passwordLogInput: ''
  };

  validationMessages = {
    firstname: {
      required: 'First Name is required.',
      minlength: 'First Name must be at least 2 characters long.',
      maxlength: 'First Name cannot be more than 25 characters long.'
    },
    lastname: {
      required: 'Last Name is required.',
      minlength: 'Last Name must be at least 2 characters long.',
      maxlength: 'Last Name cannot be more than 25 characters long.'
    },
    email: {
      required: 'Email is required.',
      pattern: 'Email not in valid format.',
      minlength: 'Email must be at least 2 characters long.',
      maxlength: 'Email cannot be more than 25 characters long.'
    },
    password: {
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
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(15)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(15)])
    });

    this.signUpForm = new FormGroup({
      Firstname: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      Lastname: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      Email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(15)]),
      Password: new FormControl('', [Validators.required, Validators.maxLength(15)])
    });
  }

  onLoginEmailBlur() {
    this.showLoginEmailErrors = true;
  }

  onLoginEmailChange() {
    this.showLoginEmailErrors = false;
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

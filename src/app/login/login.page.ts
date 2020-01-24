import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Observable, fromEvent, Subscription, of } from 'rxjs';
import { map, debounceTime, filter, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements AfterViewInit {
  @ViewChild('addressSearch', { static: false }) addressSearch: ElementRef;

  isLoginView = true;
  form: FormGroup;
  loginForm = new FormGroup({
    addressSearch: new FormControl('')
  });

  user = '';
  pass = '';

  addressSearchObservable: Observable<{ street: string, postalCode: string }[]>;

  constructor(
    private strgService: StorageService,
    private fb: FormBuilder,
    private noteService: NoteService
  ) { }

  ngAfterViewInit() {
    console.log('setting up address search observable');
    console.log('addressSearch input: ', this.loginForm.get('addressSearch'));
    /*
    this.addressSearchObservable = this.loginForm.get('addressSearch').valueChanges
      .pipe(
        debounceTime(250),
        filter(query => query.length >= 2 || query.length === 0),
        distinctUntilChanged(),
        switchMap(value => {
          console.log('calling suggestion service');
          return value
            ? this.noteService.getAddressSuggestion(value).pipe(catchError(_ => of([])))
            : of([]);
        })
      );
      */

    this.addressSearchObservable = this.noteService.getInputSuggestions(
      this.loginForm.get('addressSearch').valueChanges,
      this.noteService.getAddressSuggestion
    );
  }

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

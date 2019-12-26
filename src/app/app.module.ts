import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';


import { HttpClientModule } from '@angular/common/http';
import { baseURL } from './shared/urldbs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteDetailSettingsComponent } from './note-detail-settings/note-detail-settings.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent, AddNoteComponent, NoteDetailSettingsComponent],
  entryComponents: [AddNoteComponent, NoteDetailSettingsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: 'BaseURL', useValue: baseURL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

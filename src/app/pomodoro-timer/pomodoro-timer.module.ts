import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PomodoroTimerPage } from './pomodoro-timer.page';

const routes: Routes = [
  {
    path: '',
    component: PomodoroTimerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PomodoroTimerPage]
})
export class PomodoroTimerPageModule {}

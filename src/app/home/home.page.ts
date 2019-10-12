import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'
import { ModalComponent } from '../modal/modal.component'
import { NoteService } from '../services/note.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private modal: ModalController,
    private serviceNote: NoteService
  ) { }

  ngOnInit() {
    this.createExampleNote();
  }

  createExampleNote() {
    this.serviceNote.createExampleNote();
  }

  async openModal() {
    const modal = await this.modal.create({
      component: ModalComponent
    });
    return await modal.present();
  }

}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-note-detail-settings',
  templateUrl: './note-detail-settings.component.html',
  styleUrls: ['./note-detail-settings.component.scss'],
})
export class NoteDetailSettingsComponent implements OnInit {

  constructor(private modalController: ModalController) {

   }

  ngOnInit() {}


  closeModal() {
    this.modalController.dismiss();
  }
}

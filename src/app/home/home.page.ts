import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular'
import { ModalComponent} from '../modal/modal.component'
import { CreateNoteService } from '../services/create-note.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modal: ModalController,
              private serviceNote:  CreateNoteService) {

    this.noteEx();
  }


  noteEx(){
    this.serviceNote.createNoteEx()
  }
  
   async openModal(){
    const modal = await this.modal.create({
      component: ModalComponent
    })
    return await modal.present();
  }

}

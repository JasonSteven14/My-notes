import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item { name: string; }
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(private angularFirestore: AngularFirestore) {
  }

  getDocuments(coll) {
    //this.items = this.angularFirestore.collection(coll)
  }

}

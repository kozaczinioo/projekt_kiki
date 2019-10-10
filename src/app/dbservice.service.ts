import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item';
import { debug } from 'util';


@Injectable({
  providedIn: 'root'
})


export class DbserviceService {

  items: AngularFireList<any[]>;
  itemsRef: AngularFireList<any>;

  constructor(
   public db: AngularFireDatabase)
   {
     this.items = db.list('/');
     console.log(this.items);

   }



   getItems() {
    console.log(this.items.valueChanges());
    return this.items;
   }
    pushItem(item: Item) {
    this.itemsRef.push(item);
    console.debug("abc");
   }

}

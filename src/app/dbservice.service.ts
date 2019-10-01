import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DbserviceService {
  items: Observable<any>;
  // itemsRef: AngularFireList<any>;


  constructor(
    public db: AngularFireDatabase
  ){

     this.items = db.list('/courses').valueChanges();
     this.items.subscribe(res => console.log(res));

  }



getItems() {
  this.items
  .subscribe(items =>
    {
      console.log(items);
      return items;
    })
    return this.items;
   }
}

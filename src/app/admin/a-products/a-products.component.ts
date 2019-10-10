import { Item } from './../../item';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import { DbserviceService } from './../../dbservice.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { getMatFormFieldMissingControlError } from '@angular/material';
import { AutofillMonitor } from '@angular/cdk/text-field';

@Component({
  selector: 'app-a-products',
  templateUrl: './a-products.component.html',
  styleUrls: ['./a-products.component.scss']
})

export class AProductsComponent {

  items: Observable<any[]>;
  //items: AngularFireList<any[]>;
  itemsRef: AngularFireList<any>;


  constructor(DbserviceService: DbserviceService, public db: AngularFireDatabase) {
    this.itemsRef = DbserviceService.getItems();
    this.items = this.itemsRef.valueChanges();
    //console.log("bez" + this.items); //nie dziala
    //this.items.subscribe(res => console.log("z"  + res)); //dziala
    //this.items.valueChanges();
  }


  RemoveCar()
  {
    this.itemsRef.remove('3');
  }

  delete(item: Item) {
    //console.log(item.$key);
     this.db.object('/' + item.key)
      .remove();
  }
}

import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { DbserviceService } from './../../dbservice.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { getMatFormFieldMissingControlError } from '@angular/material';

@Component({
  selector: 'app-a-products',
  templateUrl: './a-products.component.html',
  styleUrls: ['./a-products.component.scss']
})
export class AProductsComponent {

  items: Observable<any>;
  //itemsRef: AngularFireList<any>;


  constructor(DbserviceService: DbserviceService) {
    this.items = DbserviceService.getItems();
    // this.items = this.itemsRef.valueChanges();
    //this.items = DbserviceService.items;
    console.log(this.items);
    this.items.subscribe(res => console.log(res));
  }


}

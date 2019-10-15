import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { DbserviceService } from './../dbservice.service';


@Component({
  selector: 'app-ogloszenia',
  templateUrl: './ogloszenia.component.html',
  styleUrls: ['./ogloszenia.component.scss']
})
export class OgloszeniaComponent {

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
}

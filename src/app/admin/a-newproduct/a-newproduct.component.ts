import { FileDropComponent } from './../../file-drop/file-drop.component';
import { AngularFireDatabase } from 'angularfire2/database';
import { Item } from './../../item';
import { DbserviceService } from './../../dbservice.service';
import { Router } from '@angular/router';
import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, NumberValueAccessor } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFireList } from 'angularfire2/database';
import { debug } from 'util';
import { FirebaseDatabase } from 'angularfire2';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-a-newproduct',
  templateUrl: './a-newproduct.component.html',
  styleUrls: ['./a-newproduct.component.scss']
})

export class ANewproductComponent implements OnInit{
  key: string;
  type: string;
  make: string;
  color: string;
  model: string;
  year: number;
  mileage: number;
  fueltype: string;
  broaken: boolean;
  describtion: string;
  price: number;
  engine: number;
  url: string[] = [];

  items: Observable<any[]>;
  itemsRef: AngularFireList<any>;

  message: string;
  private messageSource = new BehaviorSubject<string>("");
  currentMessage = this.messageSource.asObservable();


  constructor(private router: Router, dbserviceService: DbserviceService, public db: AngularFireDatabase) {
    this.itemsRef = dbserviceService.getItems();
    this.items = this.itemsRef.valueChanges();
  }

  ngOnInit(){
    this.currentMessage.subscribe(message => {
      console.log("got it");
      this.message = message;
      this.url.push(message);
      console.log(this.message);
      console.log(this.url);
      if(this.url[0] === "")
      {
        this.url.shift();
      }
    } );
  }

  cancel()
  {
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.router.navigate(['nowy']);
  });
  }
  addCar()
  {
    var item = new Item();
    item.make = this.make;
    item.model = this.model;
    item.type = this.type;
    item.color = this.color;
    item.year = this.year;
    item.mileage = this.mileage;
    item.fueltype = this.fueltype;
    item.broaken = this.broaken;
    item.describtion = this.describtion;
    item.engine = this.engine;
    item.price = this.price;
    item.url = this.url;
    item.fav = false;

    //item.key = this.key;

    var newPostKey = this.itemsRef.push(item).key;
    //this.itemsRef.push(item).then(x => console.log("poszlo"));
    console.log(newPostKey);
    this.db.object('/' + newPostKey)
    .update({ key: newPostKey, });

  }
  public changeMessage(message: string) {
    this.messageSource.next(message);
    console.log(this.messageSource.getValue());
    console.log("sending");
  }
  update()
  {

  }

}

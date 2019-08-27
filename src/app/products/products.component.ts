import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = [
    {id: 1, name: 'Fiat', make: 'panda', prize: 20000, year: 2010, mileage: 200000,
     url: 'https://i.ytimg.com/vi/HY4iowidtC0/maxresdefault.jpg'},
    {id: 2, name: 'DAF', make: 'XF', prize: 30000, year: 2010, mileage: 300000,
     url: 'https://www.trucksnl.com/TruckPics/size5/4952114_1.jpg'},
    {id: 3, name: 'Volvo', make: 'FH 640', prize: 40000, year: 2010, mileage: 400000,
     url: 'https://arrowtruck-cdn.azureedge.net/6d0440ea-0578-439e-b30a-e6a3017f1469/DSC03488.JPG'},

  ];

  constructor() { }

  ngOnInit() {
  }

}

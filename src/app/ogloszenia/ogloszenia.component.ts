import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';

@Component({
  selector: 'app-ogloszenia',
  templateUrl: './ogloszenia.component.html',
  styleUrls: ['./ogloszenia.component.scss']
})
export class OgloszeniaComponent implements OnInit {

  opis = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus ligula porttitor congue egestas. Aenean fringilla et arcu eu rhoncus. In aliquet risus turpis, vel ullamcorper magna venenatis in. Nullam nibh ipsum, maximus quis ultrices ut, scelerisque eu elit. Aliquam sit amet sapien at dui varius tincidunt.";
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {

    this.galleryOptions = [
      {
       // width: '600px',
        //height: '400px',
        width: '60vw',
        height: '40vw',
        thumbnailsColumns: 4
      }
    ];

    this.galleryImages = [
      {
        small: 'https://imgd.aeplcdn.com/642x361/cw/ec/40842/Vision-M-Next-Concept-161133.jpg?wm=1&q=85',
        medium: 'https://imgd.aeplcdn.com/642x361/cw/ec/40842/Vision-M-Next-Concept-161133.jpg?wm=1&q=85',
        big: 'https://imgd.aeplcdn.com/642x361/cw/ec/40842/Vision-M-Next-Concept-161133.jpg?wm=1&q=85'
      },
      {
        small: 'https://apollo-ireland.akamaized.net/v1/files/39g1uz1l040a2-PL/image;s=261x203',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-big.jpeg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg'
      },
      {
        small: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqx0lAogobatouo096HssiEzLrnMC2zUonNNgzWYV--IRg6Ii4Zg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg'
      }
    ];
  }
}

import { AuthService } from './../auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component } from '@angular/core';
import { auth } from 'firebase/app';
import * as firebase from 'firebase/app';
import { FirebaseAuth } from '@angular/fire';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {

  
  constructor(public auth: AuthService) {

  }
  logout() {
    this.auth.logout();
  }


}

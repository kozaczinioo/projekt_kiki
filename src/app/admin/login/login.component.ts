import { AuthService } from './../../auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component } from '@angular/core';
import { auth } from 'firebase/app';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { FirebaseAuth } from '@angular/fire';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {


  constructor(public auth: AuthService) {
  }

  login() {
    this.auth.login();
  }

}

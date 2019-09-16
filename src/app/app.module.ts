import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatMenuModule, MatCardModule, MatButtonModule} from '@angular/material';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { OgloszeniaComponent } from './ogloszenia/ogloszenia.component';
import { OnasComponent } from './onas/onas.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { AProductsComponent } from './admin/a-products/a-products.component';
import { ANewproductComponent } from './admin/a-newproduct/a-newproduct.component';
import { LoginComponent } from './admin/login/login.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    ProductsComponent,
    HomeComponent,
    KontaktComponent,
    OgloszeniaComponent,
    OnasComponent,
    AProductsComponent,
    ANewproductComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    NgxGalleryModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),

    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'ogloszenia', component: OgloszeniaComponent},
      {path: 'onas', component: OnasComponent},
      {path: 'kontakt', component: KontaktComponent},
      {path: 'nowy',  component: ANewproductComponent},
      {path: 'admin', component: AProductsComponent},
      {path: 'login', component: LoginComponent},
    ]),
  ],
  providers: [AngularFireAuthModule, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

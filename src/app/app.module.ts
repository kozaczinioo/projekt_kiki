import { AuthGuardService } from './auth-guard.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatMenuModule, MatCardModule, MatButtonModule, MatFormField, MatFormFieldModule} from '@angular/material';
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
import { AngularFireModule } from 'angularfire2';
import { AuthService } from './auth.service';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { AngularFireDatabaseModule, AngularFireDatabase } from "angularfire2/database";
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { ProductCardComponent } from './product-card/product-card.component';
import { FileDropComponent } from './file-drop/file-drop.component';
import { NgxFileDropModule } from 'ngx-file-drop';

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
    ProductCardComponent,
    FileDropComponent,

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
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    NgxFileDropModule,

    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'ogloszenia', component: OgloszeniaComponent},
      {path: 'onas', component: OnasComponent},
      {path: 'kontakt', component: KontaktComponent},
      {path: 'login', component: LoginComponent},
      {path: 'product/:id', component: ProductCardComponent},
      {path: 'nowy',  component: ANewproductComponent},
      {path: 'admin', component: AProductsComponent, canActivate: [AuthGuardService]},
      //{path: 'nowy',  component: ANewproductComponent, canActivate: [AuthGuardService]},
    ]),
  ],
  providers: [AngularFireAuthModule,
              AuthService,
              AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

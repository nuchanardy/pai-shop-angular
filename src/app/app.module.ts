import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { SignupComponent } from './signup/signup.component';
import { IndexComponent } from './index/index.component';
import { TrackorderComponent } from './trackorder/trackorder.component';
import { DetailComponent } from './detail/detail.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';

var config = {
  apiKey: "AIzaSyBBcs4AFYMS7vMUPXhPhiwXXMCcV1uKigk",
  authDomain: "paishop-40485.firebaseapp.com",
  databaseURL: "https://paishop-40485.firebaseio.com",
  projectId: "paishop-40485",
  storageBucket: "paishop-40485.appspot.com",
  messagingSenderId: "155621060087"
};

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'track-order',component:TrackorderComponent},
  {path:'detail/:product_name',component:DetailComponent},
  {path:'admin',component:AdminComponent},
  {path:'cart/:product_name',component:CartComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    IndexComponent,
    TrackorderComponent,
    DetailComponent,
    AdminComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { AuthService } from './api/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  isLogined:boolean = false;

  constructor(private firebase: AngularFireDatabase, private authFire:AngularFireAuth, private auth: AuthService, private rout:Router) { 
    authFire.authState.subscribe(user=>{
      console.log(user)
      if(user!=null){
        this.isLogined=true;
      }
      else{
        this.isLogined=false;
      }
    })
  }

  ngOnInit() {
    
  }

  routpage(namepage) {
    this.authFire.authState.subscribe(user=>{
      console.log(user)
      if(user!=null){
        this.isLogined=true;
        this.rout.navigate([namepage]);
      }
      else{
        this.isLogined=false;
        this.rout.navigate([namepage]);
      }
    })
  }

  logout() {
    this.auth.logout().subscribe(()=>{
      this.rout.navigate(['/index']);
    })
  }


  // isLogin=false;
  // constructor(private firebase:AngularFireAuth){
  //   if(firebase.auth.currentUser!=null){
  //     firebase.authState.subscribe(user=>{
  //       if(user!=null){
  //         this.isLogin=true;
  //       }
  //     })
  //   }
  // }

  // title = 'pai-shop';

  // logOut(){
  //   this.firebase.auth.signOut();
  // }
}

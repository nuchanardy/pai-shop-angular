import { Component, OnInit } from '@angular/core';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {

  }

  // insert() {
  //   this.auth.testInsearch().subscribe(function(){
  //     alert("ok")
  //   })
  // }
  
}

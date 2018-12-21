import { Component, OnInit } from '@angular/core';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: string;
  password: string;
  email: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {

  }

  register() {

    var user = {
      user: this.user,
      email: this.email,
      password: this.password
    }

    this.auth.regster(user).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);

    })
  }


  // insert() {
  //   this.auth.testInsearch().subscribe(function(){
  //     alert("ok")
  //   })
  // }

}

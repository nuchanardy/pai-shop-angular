import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AuthService } from '../api/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  isLogined: boolean = false;

  constructor(private route: ActivatedRoute,
    private firebase: AngularFireDatabase,
    private auth: AuthService,
    private rout: Router,
    private authFire: AngularFireAuth) {
    authFire.authState.subscribe(user => {
      console.log(user)
      if (user != null) {
        this.isLogined = true;
      }
      else {
        this.isLogined = false;
      }
    })
  }

  products: Observable<any[]>;

  private productname: any;

  ngOnInit() {
    this.productname = this.route.snapshot.paramMap.get('product_name');
    this.products = this.firebase.list('/product', ref => ref.orderByChild('name').equalTo(this.productname)).valueChanges();
  }

  routpage(namepage) {
    this.authFire.authState.subscribe(user => {
      console.log(user)
      if (user != null) {
        this.isLogined = true;
        this.rout.navigate([namepage]);
      }
      else {
        this.isLogined = false;
        this.rout.navigate([namepage]);
      }
    })
  }

}

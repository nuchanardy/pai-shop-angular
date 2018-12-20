import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private route: ActivatedRoute,private firebase: AngularFireDatabase) { }

  private products: Observable<any[]>;
  
  private productname: any;

  ngOnInit() {
    this.productname = this.route.snapshot.paramMap.get('product_name');
    this.products = this.firebase.list('/product', ref => ref.orderByChild('name').equalTo(this.productname)).valueChanges();
  }

}

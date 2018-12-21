import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
 
  constructor(private firebase: AngularFireDatabase) { }

  products: Observable<any[]>; 

  ngOnInit() {
    this.products = this.firebase.list('product').valueChanges();
  }

  searchGroup(groupname) {
    this.products = this.firebase.list('/product', ref => ref.orderByChild('type').equalTo(groupname)).valueChanges();
  }

}

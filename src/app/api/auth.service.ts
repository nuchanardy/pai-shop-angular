import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private firebaseDB:AngularFireDatabase) { }

  testInsearch(element) {
   
      this.firebaseDB.database.ref('product')
      .push({id:element.id, name:element.name, 
            category:element.category, 
            type:element.type, 
            brand:element.brand, 
            color:element.color, 
            size:element.size, 
            price:element.price, 
            img:element.img
          })
          
  }

}

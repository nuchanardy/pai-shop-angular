import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private firebaseDB: AngularFireDatabase, private authfire: AngularFireAuth) { }

  testInsearch(element) {

    this.firebaseDB.database.ref('product')
      .push({
        id: element.id,
        name: element.name,
        category: element.category,
        type: element.type,
        brand: element.brand,
        color: element.color,
        size: element.size,
        price: element.price,
        img: element.img
      })

  }

  login(userData) {
    return new Observable(observable => {
      this.authfire.auth.signInWithEmailAndPassword(userData.email, userData.password).then(user => {
        observable.next(user);
        observable.complete();
      })
        .catch(err => {
          observable.error(err.code);
          observable.complete();
        })
    })
  }

  regster(userData) {
    return new Observable(observable => {
      this.authfire.auth.createUserWithEmailAndPassword(userData.email, userData.password).then(user => {
        this.firebaseDB.database.ref('users/' + user.user.uid)
          .set({ id: user.user.uid, email: user.user.email, username: userData.user })
          .then(data => {
            observable.next(data);
            observable.complete();
          })
          .catch(err => {
            observable.error(err.code);
            observable.complete();
          })
      })
        .catch(err => {
          observable.error(err.code);
          observable.complete();
        })
    })
  }

  logout() {
    return new Observable(observable=>{
      this.authfire.auth.signOut().then(()=>{
        observable.next();
        observable.complete();
      })
      .catch(err => {
        observable.error(err.code);
        observable.complete();
      })
    })
  }

}

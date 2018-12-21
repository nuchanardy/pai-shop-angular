import { Component, OnInit } from '@angular/core';
import { AuthService } from '../api/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: string;
  email: string;

  constructor(private auth: AuthService, private rout: Router) {

  }

  ngOnInit() {

  }

  login() {

    this.auth.login({ email: this.email, password: this.password }).subscribe(data => {
      this.rout.navigate(['']);
    }, err => {
      console.log(err)
    })
  }


  // insert() {
  //   const product = [
  //     {id:"1", name:"Boots01", category:"shoes", type:"boots", brand:"StepPro", color:"brown", size:"40", price:"2590", img:"assets/img/shoes/boots/boots01.jpg"},
  //     {id:"2", name:"Boots02", category:"shoes", type:"boots", brand:"Unbranded", color:"brown", size:"40", price:"790", img:"assets/img/shoes/boots/boots02.jpg"},
  //     {id:"3", name:"Boots03", category:"shoes", type:"boots", brand:"Arcobareno", color:"brown", size:"39", price:"2590", img:"assets/img/shoes/boots/boots03.jpg"},
  //     {id:"4", name:"Boots04", category:"shoes", type:"boots", brand:"CSB", color:"black", size:"39", price:"699", img:"assets/img/shoes/boots/boots04.jpg"},
  //     {id:"5", name:"Boots05", category:"shoes", type:"boots", brand:"HOLM", color:"brown", size:"40", price:"2061", img:"assets/img/shoes/boots/boots05.jpg"},
  //     {id:"6", name:"Sandals01", category:"shoes", type:"sandals", brand:"Monobo", color:"white", size:"38", price:"299", img:"assets/img/shoes/sandals/sandals01.jpg"},
  //     {id:"7", name:"Sandals02", category:"shoes", type:"sandals", brand:"Kito", color:"yellow", size:"38", price:"200", img:"assets/img/shoes/sandals/sandals02.jpg"},
  //     {id:"8", name:"Sandals03", category:"shoes", type:"sandals", brand:"Adidas", color:"black", size:"38", price:"700", img:"assets/img/shoes/sandals/sandals03.jpg"},
  //     {id:"9", name:"Sandals04", category:"shoes", type:"sandals", brand:"CC-OO", color:"red", size:"38", price:"590", img:"assets/img/shoes/sandals/sandals04.jpg"},
  //     {id:"10", name:"Sandals05", category:"shoes", type:"sandals", brand:"CPS", color:"black", size:"38", price:"600", img:"assets/img/shoes/sandals/sandals05.jpg"},
  //     {id:"11", name:"high-heels01", category:"shoes", type:"high-heels", brand:"UNIQLO", color:"black", size:"38", price:"990", img:"assets/img/shoes/high-heels/high01.jpg"},
  //     {id:"12", name:"high-heels02", category:"shoes", type:"high-heels", brand:"JESSICA SIMPSON", color:"black", size:"38", price:"2990", img:"assets/img/shoes/high-heels/high02.jpg"},
  //     {id:"13" ,name:"high-heels03", category:"shoes", type:"high-heels", brand:"PRETTY FIT", color:"nude", size:"38", price:"1992", img:"assets/img/shoes/high-heels/high03.jpg"},
  //     {id:"14" ,name:"high-heels04", category:"shoes", type:"high-heels", brand:"ECLIPSE", color:"gloden", size:"38", price:"1385", img:"assets/img/shoes/high-heels/high04.jpg"},
  //     {id:"15" ,name:"high-heels05", category:"shoes", type:"high-heels", brand:"croon", color:"brown", size:"38", price:"4290", img:"assets/img/shoes/high-heels/high05.jpg"},
  //     {id:"16" ,name:"Sneakers01", category:"shoes", type:"sneakers", brand:"adidas", color:"black", size:"40", price:"6500", img:"assets/img/shoes/sneakers/sneakers01.jpg"},
  //     {id:"17" ,name:"Sneaker02", category:"shoes", type:"sneakers", brand:"adidas", color:"black", size:"39", price:"4500", img:"assets/img/shoes/sneakers/sneakers02.jpg"},
  //     {id:"18" ,name:"Sneaker03", category:"shoes", type:"sneakers", brand:"adidas", color:"white", size:"39", price:"2000", img:"assets/img/shoes/sneakers/sneakers03.jpg"},
  //     {id:"19" ,name:"Sneaker04", category:"shoes", type:"sneakers", brand:"adidas", color:"orange", size:"39", price:"2000", img:"assets/img/shoes/sneakers/sneakers04.jpg"},
  //     {id:"20" ,name:"Sneaker05", category:"shoes", type:"sneakers", brand:"adidas", color:"black", size:"39", price:"2300", img:"assets/img/shoes/sneakers/sneakers05.jpg"},
  //     {id:"21" ,name:"Belts01", category:"accessories", type:"belts", brand:"Trusty", color:"black", size:"5.0 x 1.5 x 125.0 cm", price:"380", img:"assets/img/accessories/belts/belts01.jpg"},
  //     {id:"22" ,name:"Belts02", category:"accessories", type:"belts", brand:"Wrangler", color:"brown", size:"5.0 x 1.5 x 125.0 cm", price:"1590", img:"assets/img/accessories/belts/belts02.jpg"},
  //     {id:"23" ,name:"Belts03", category:"accessories", type:"belts", brand:"TOPSHOP", color:"beige", size:"5.0 x 1.5 x 125.0 cm", price:"1100", img:"assets/img/accessories/belts/belts03.jpg"},
  //     {id:"24" ,name:"Belts04", category:"accessories", type:"belts", brand:"TOPSHOP", color:"black", size:"5.0 x 1.5 x 125.0 cm", price:"1250", img:"assets/img/accessories/belts/belts04.jpg"},
  //     {id:"25" ,name:"Belts05", category:"accessories", type:"belts", brand:"Trusty", color:"black", size:"5.0 x 1.5 x 125.0 cm", price:"420", img:"assets/img/accessories/belts/belts05.jpg"},
  //     {id:"26" ,name:"Caps01", category:"accessories", type:"caps", brand:"Seoul Cool", color:"black", size:"57-60 cm", price:"890", img:"assets/img/accessories/caps/cap01.jpg"},
  //     {id:"27" ,name:"Caps02", category:"accessories", type:"caps", brand:"Puma", color:"black", size:"57-60 cm", price:"1299", img:"assets/img/accessories/caps/cap02.jpg"},
  //     {id:"28" ,name:"Caps03", category:"accessories", type:"caps", brand:"Puma", color:"white", size:"57-60 cm", price:"1799", img:"assets/img/accessories/caps/cap03.jpg"},
  //     {id:"29" ,name:"Caps04", category:"accessories", type:"caps", brand:"Puma", color:"yellow", size:"57-60 cm", price:"179", img:"assets/img/accessories/caps/cap04.jpg"},
  //     {id:"30" ,name:"Caps05", category:"accessories", type:"caps", brand:"Wrangler", color:"red", size:"57-60 cm", price:"690", img:"assets/img/accessories/caps/cap05.jpg"},
  //     {id:"31" ,name:"Sunglasses01", category:"accessories", type:"sunglasses", brand:"Ray-Ban", color:"black", size:"58 mm", price:"4700", img:"assets/img/accessories/sunglasses/sunglasses01.jpg"},
  //     {id:"32" ,name:"Sunglasses02", category:"accessories", type:"sunglasses", brand:"Ray-Ban", color:"brown", size:"67 mm", price:"5100", img:"assets/img/accessories/sunglasses/sunglasses02.jpg"},
  //     {id:"33" ,name:"Sunglasses03", category:"accessories", type:"sunglasses", brand:"Ray-Ban", color:"black", size:"67 mm", price:"4900", img:"assets/img/accessories/sunglasses/sunglasses03.jpg"},
  //     {id:"34" ,name:"Sunglasses04", category:"accessories", type:"sunglasses", brand:"Ray-Ban", color:"gold", size:"67 mm", price:"4700", img:"assets/img/accessories/sunglasses/sunglasses04.jpg"},
  //     {id:"35" ,name:"Sunglasses05", category:"accessories", type:"sunglasses", brand:"Ray-Ban", color:"black", size:"52 mm", price:"4500", img:"assets/img/accessories/sunglasses/sunglasses05.jpg"},
  //     {id:"36" ,name:"Scarves01", category:"accessories", type:"scarves", brand:"F.O.F.", color:"blue", size:"671 x 74.5 cm", price:"490", img:"assets/img/accessories/scarves/scarves01.jpg"},
  //     {id:"37" ,name:"Scarves02", category:"accessories", type:"scarves", brand:"Sfera", color:"blue", size:"40 x 70 cm", price:"450", img:"assets/img/accessories/scarves/scarves02.jpg"},
  //     {id:"38" ,name:"Scarves03", category:"accessories", type:"scarves", brand:"Chanel Scarf", color:"black", size:"70 x 180 cm", price:"1890", img:"assets/img/accessories/scarves/scarves03.jpg"},
  //     {id:"39" ,name:"Scarves04", category:"accessories", type:"scarves", brand:"Gucci", color:"black", size:"180 x 66 cm", price:"1850", img:"assets/img/accessories/scarves/scarves04.jpg"},
  //     {id:"40" ,name:"WatchesWM01", category:"watches", type:"women", brand:"Gucci", color:"pink gold", size:"-", price:"3720", img:"assets/img/watches/women/women01.jpg"},
  //     {id:"41" ,name:"WatchesWM02", category:"watches", type:"women", brand:"CASIO", color:"pink gold", size:"-", price:"4450", img:"assets/img/watches/women/women02.jpg"},
  //     {id:"42" ,name:"WatchesWM03", category:"watches", type:"women", brand:"GUESS", color:"white", size:"-", price:"3450", img:"assets/img/watches/women/women03.jpg"},
  //     {id:"43" ,name:"WatchesWM04", category:"watches", type:"women", brand:"MAURICE LACROIX", color:"black", size:"-", price:"60000", img:"assets/img/watches/women/women04.jpg"},
  //     {id:"44" ,name:"WatchesWM05", category:"watches", type:"women", brand:"RHYTHM", color:"silver", size:"-", price:"7360", img:"assets/img/watches/women/women05.jpg"},
  //     {id:"45" ,name:"WatchesM01", category:"watches", type:"men", brand:"CASIO", color:"silver", size:"-", price:"5340", img:"assets/img/watches/men/men01.jpg"},
  //     {id:"46" ,name:"WatchesM02", category:"watches", type:"men", brand:"CASIO", color:"black", size:"-", price:"7740", img:"assets/img/watches/men/men02.jpg"},
  //     {id:"47" ,name:"WatchesM03", category:"watches", type:"men", brand:"RHYTHM", color:"brown", size:"-", price:"7360", img:"assets/img/watches/men/men03.jpg"},
  //     {id:"48" ,name:"WatchesM04", category:"watches", type:"men", brand:"BABY-G", color:"blue", size:"-", price:"5500", img:"assets/img/watches/men/men04.jpg"},
  //     {id:"49" ,name:"WatchesM05", category:"watches", type:"men", brand:"BABY-G", color:"white", size:"-", price:"5600", img:"assets/img/watches/men/men05.jpg"},
  //     {id:"50" ,name:"Carry-OnsM01", category:"bags", type:"carry-ons", brand:"Pegasus", color:"white", size:"26.5x36x60 cm", price:"1990", img:"assets/img/bags/carry-ons/carry01.png"},
  //     {id:"51" ,name:"Carry-OnsM02", category:"bags", type:"carry-ons", brand:"Pegasus", color:"pink", size:"20 inch", price:"990", img:"assets/img/bags/carry-ons/carry02.png"},
  //     {id:"52" ,name:"Carry-OnsM03", category:"bags", type:"carry-ons", brand:"AMERICAN TOURISTER", color:"black", size:"24 inch", price:"3255", img:"assets/img/bags/carry-ons/carry03.png"},
  //     {id:"53" ,name:"Carry-OnsM04", category:"bags", type:"carry-ons", brand:"MOOF", color:"pink", size:"24 inch", price:"1349", img:"assets/img/bags/carry-ons/carry04.png"},
  //     {id:"54" ,name:"Backpack01", category:"bags", type:"backpack", brand:"NIKE", color:"black", size:"43x 30.5 x 15 cm", price:"890", img:"assets/img/bags/backpack/backpack01.jpg"},
  //     {id:"55" ,name:"Backpack02", category:"bags", type:"backpack", brand:"CONVERSE", color:"black", size:"43x 30.5 x 15 cm", price:"990", img:"assets/img/bags/backpack/backpack02.jpg"},
  //     {id:"56" ,name:"Backpack03", category:"bags", type:"backpack", brand:"CONVERSE", color:"blue", size:"43x 30.5 x 15 cm", price:"990", img:"assets/img/bags/backpack/backpack03.jpg"},
  //     {id:"57" ,name:"Backpack04", category:"bags", type:"backpack", brand:"Anello", color:"pink", size:"43x 30.5 x 15 cm", price:"2190", img:"assets/img/bags/backpack/backpack04.jpg"},
  //     {id:"58" ,name:"Backpack05", category:"bags", type:"backpack", brand:"Adidas Neo", color:"black", size:"43x 30.5 x 15 cm", price:"1100", img:"assets/img/bags/backpack/backpack05.jpg"}
  //   ]

  //   product.forEach(element => {
  //     this.auth.testInsearch(element)
  //   });

  // }

}

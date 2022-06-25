import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/model/product';
import { ProductsService } from 'src/app/service/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.productsService.getCart();
  total= 0;
  constructor(private router:Router, private productsService:ProductsService) { }

  ngOnInit(): void {

  }

totalPrice(){
  debugger;
  this.total=0
  for(let i=0 ; i<this.items.length;i++ ){
    var calc= this.items[i].price *this.items[i].amount;
     this.total += calc;
  }
   return this.total;
}
  removeProduct(item:Products){
    if(confirm("you are remove this item?")== true){
      this.items = this.items.filter(p => p.id !== item.id)
      }
  }
 
  Continue(){
    debugger;
    if(this.items.length !== 0 ){
      this.router.navigate(['CheckForm'])
    }
    else{
      alert("your cart is empty")
    }
  }
}

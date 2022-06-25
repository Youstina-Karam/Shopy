import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/product';
import { ProductsService } from 'src/app/service/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  products: Products[]= [];
  featureList:Products[]=[];
  constructor(private productsService :ProductsService) { 
  
  }
  ngOnInit(): void {
    this.productsService.getProduct().subscribe( data => {
      for( let i=0 ; i< data.length ; i++){
        const product = data[i];
        product['amount'] = 1 ;
            } 
      this.products =data
    }) 
  }

 onLike(pro:Products){
  this.featureList.unshift(pro);
 }

 addToCart(product: Products) {
  this.productsService.addToCart(product);
  alert('Your product has been added to the cart!');
 }

}

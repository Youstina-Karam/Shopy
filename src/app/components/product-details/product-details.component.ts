import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/model/product';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
   productDetails: Products[] =[];
   product: Products | undefined;
     constructor(private route: ActivatedRoute , private productsService:ProductsService) {

   }

  ngOnInit(): void {
  this.productsService.getProduct().subscribe( data =>{
    for( let i=0 ; i< data.length ; i++){
      const product = data[i];
      product['amount'] = 1 ;
          } 
    this.productDetails =data; 
          
    console.log(this.productDetails)
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
  
     this.product = this.productDetails.find(product => product.id === productIdFromRoute);
     console.log(this.product);
  })
   
  
  }
  addToCart(product: Products) {
    this.productsService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  
}

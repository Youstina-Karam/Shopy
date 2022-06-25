import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from 'src/app/model/product';
import{ProductsService} from '../../service/products.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    @Input() productItem:Products;

    like:boolean= true;
    @Output() liked = new EventEmitter();
   
    constructor(private productsService :ProductsService) { 
    this.productItem ={
      id:1,
      name:'',
      description:'',
      price:1,
      url: '',
      amount:1
    
    }
  }

  ngOnInit(): void {
        
    }
    addFeature(pro:Products){
      if(this.like ==true){
        this.liked.emit(pro)
      }
    }

    addToCart(product: Products) {
      console.log(product)
      this.productsService.addToCart(product);
      window.alert('Your product has been added to the cart!');
    }

    onChange(event: number){
      this.productItem.amount=event;

      }
    
  }


 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Products } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productCart:Products[]=[]
  constructor(private http: HttpClient) { }

  getProduct(): Observable<Products[]>{
    return this.http.get<Products[]>('assets/data.json');
  }

 /* cart services */
 getCart(){
   return this.productCart
 }
 addToCart(product: Products) {
  this.productCart.push(product);
}
clearCart() {
  this.productCart = [];
  return this.productCart;
}
}

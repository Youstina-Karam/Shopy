import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckFormComponent } from './components/check-form/check-form.component';
import { HomeComponent } from './components/home/home.component';
import { OrderConfirmComponent } from './components/order-confirm/order-confirm.component';
import { ProductDetailsComponent} from './components/product-details/product-details.component'

const routes: Routes = [
  { 
    path:'',
    component: HomeComponent
  },
  { 
    path:'CheckForm',
    component: CheckFormComponent
  },
  { 
    path:'Confirm',
    component: OrderConfirmComponent
  },
  { 
    path:'Cart',
    component: CartComponent
  },
  { 
    path:'ProductList/:productId',
    component: ProductDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StorePageComponent } from './store-page/store-page.component';

const routes: Routes = [
  {
    path: '',
    component: StorePageComponent,
    children: [
      { path: '', component: ProductListComponent},
      { path: 'product/:product_id', component: ProductDetailsComponent},
      { path: 'cart', component: CartComponent},
      { path: 'checkout', component: CheckoutComponent},
      { path: 'confirm', component: ConfirmationComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }

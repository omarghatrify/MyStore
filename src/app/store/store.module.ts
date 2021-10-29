import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { StoreRoutingModule } from './store-routing.module';
import { StorePageComponent } from './store-page/store-page.component';
import { StoreNavbarComponent } from './store-navbar/store-navbar.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { CartItemComponent } from './cart-item/cart-item.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    CartComponent,
    StorePageComponent,
    StoreNavbarComponent,
    CheckoutComponent,
    CartItemComponent,
    AddToCartComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    StoreRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatBadgeModule,
    MatSnackBarModule
  ]
})
export class StoreModule { }

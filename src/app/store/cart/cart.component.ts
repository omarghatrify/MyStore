import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutForm } from 'src/app/models/checkout-form';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(public cart: CartService, private _router: Router) { }

  checkout(form: CheckoutForm) {
    console.log({
      form: form,
      items: this.cart.getCart()
    })
    this._router.navigate(["/store/confirm"])
    this.cart.reset();
  }
}

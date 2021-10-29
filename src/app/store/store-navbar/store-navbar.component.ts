import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-store-navbar',
  templateUrl: './store-navbar.component.html',
  styleUrls: ['./store-navbar.component.scss']
})
export class StoreNavbarComponent implements OnInit {

  cartItemsCount:  Observable<number> = new  Observable<number>();
  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.cartItemsCount = this.cart.cartItems.pipe(map(items => items.length));
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item[item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit{

  @Input() item!: CartItem;
  quantity: number = 0;
  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.quantity = this.item.quantity;
  }

  changeQuantity(quantity: number) {
    if ( quantity !- this.quantity) {
      this.cart.setQuantity(this.item.product, quantity);
    }
  }

  remove() {
    this.cart.removeItem(this.item);
  }
}

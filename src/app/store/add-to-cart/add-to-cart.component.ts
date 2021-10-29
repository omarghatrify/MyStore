import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent {

  @Output() addToCart: EventEmitter<number> = new EventEmitter<number>();
  quantity: number = 1;
  constructor() { }

  add() {
    this.addToCart.emit(this.quantity);
    this.quantity = 1;
  }
}
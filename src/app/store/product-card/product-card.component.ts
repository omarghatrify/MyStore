import { Component, Input, Output, EventEmitter} from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-card[]',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() public product!: Product;
  @Output() private addCart: EventEmitter<CartItem> = new EventEmitter<CartItem>()
  public quantity: number = 1;
  constructor() { }

  addToCart(quantity: number) {
    this.addCart.emit({
      product: this.product,
      quantity: quantity
    });
  }
}

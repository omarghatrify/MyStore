import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'any'
})
export class CartService {
  public cartItems: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);
  public cartTotal: Observable<{quantity: number; price: number}>;
  constructor(private _snackbar: MatSnackBar) {
    this.cartTotal = this.cartItems.pipe(map( items => {
      let price = 0
      let quantity = 0
      items.forEach(item => {
        quantity += item.quantity;
        price += item.product.price * item.quantity;
      });
      return { quantity, price }
    }))
  }
  
  getCart(): CartItem[]{
    return this.cartItems.value;
  }
  addItem(product: Product, quantity: number): void {
    const index = this.cartItems.value.findIndex(c => c.product.id == product.id)
    if (index == -1) this.cartItems.value.push({product,quantity});
    else this.cartItems.value[index].quantity += quantity;
    this.cartItems.next(this.cartItems.value);
    this._snackbar.open(`Added ${quantity} ${product.name} to cart!`, 'Dismiss')
  }
  removeItem(item: CartItem): void {
    const index = this.cartItems.value.findIndex(c => c.product.id == item.product.id)
    if (index != -1) {
      this.cartItems.value.splice(index, 1);
      this.cartItems.next(this.cartItems.value);
      this._snackbar.open(`Removed ${item.product.name} from cart!`, 'Dismiss')
    }
  }
  reset(): void{
    this.cartItems.next([]);
  }

  setQuantity(product: Product, quantity: number) {
    const index = this.cartItems.value.findIndex(c => c.product.id == product.id)
    if (index != -1) {
      this.cartItems.value[index].quantity = quantity;
      this.cartItems.next(this.cartItems.value);
    }
  }

  getTotal$(): Observable<{quantity: number; price: number}> {
    return this.cartItems.pipe(
      map( items => {
        let price = 0
        let quantity = 0
        items.forEach(item => {
          quantity += item.quantity;
          price += item.product.price * item.quantity;
        });
        return { quantity, price }
      })
    );
  }
}

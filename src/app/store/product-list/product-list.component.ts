import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public productsList: Observable<Product[]> = new Observable<Product[]>();
  
  constructor(private _products: ProductsService, private _cart: CartService) { }

  ngOnInit(): void {
    this.productsList = this._products.getProducts();
  }

  addToCart(item: CartItem) {
    this._cart.addItem(item.product, item.quantity);
  }

}

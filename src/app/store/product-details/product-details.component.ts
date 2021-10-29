import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Product } from 'src/app/models/product';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Observable<Product | null> = new Observable<Product>();
  constructor(private _route: ActivatedRoute, private _products: ProductsService, private _cart: CartService) { }

  ngOnInit(): void {
    this.product = this._route.paramMap.pipe(mergeMap(paramMap => {
      const productID = Number(paramMap.get('product_id'));
      if (!isNaN(productID)) {
        return this._products.getProducts().pipe(
          map(products => {
            const product = products.find(p => p.id == productID)
            if (product) return product;
            return null
          })
        );
      }
      return new Observable<Product>();
    }))
  }

  addToCart(product: Product, quantity: number) {
    this._cart.addItem(product, quantity);
  }
}

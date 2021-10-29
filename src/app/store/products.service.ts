import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'any'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>('assets/data.json');
  }
}

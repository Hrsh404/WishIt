import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { Product } from './product.component';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
private baseUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {}

  loadProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.baseUrl}/view_all_products`
    );
  }
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(
      `${this.baseUrl}/product/${id}`
    );
  }

}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private baseUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {}

  addProduct(formData: FormData): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/upload`,
      formData
    );
  }
}
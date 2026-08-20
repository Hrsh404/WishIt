import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ProductService } from './product.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})

export class ProductComponent implements OnInit {
  // Define products as an Observable stream
    products!: Observable<any[]>; 

    constructor(private productService: ProductService, private router: Router) {}

    ngOnInit(): void {
        this.products = this.productService.loadProducts();
        // .pipe(
        // tap((products: Product[]) => {
        //     products.forEach(product => {
        //         console.log(
        //             product.name,
        //             product.images?.[0]?.imageUrl
        //             );
        //         });
        //     })
        // );
    }

    viewProduct(product: Product): void {
        console.log("selected1",product)
        this.router.navigate(['/product', product.id],
            {
                state: {
                    product: product
                }
            }
        );
    }
}

export interface Product {
  id:number,
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  vendorId: number;
  images: ProductImage[];
}

export interface ProductImage {
  imageId: number;
  imageUrl: string;
}
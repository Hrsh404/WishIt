import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface Product {
  images: (File | null)[];
  price: number | null;
  description: string;
}

@Component({
  selector: 'app-vendor',
  imports: [FormsModule,CommonModule],
  templateUrl: './vendor.html',
  styleUrl: './vendor.scss'
})


export class Vendor {
  products: Product[] = [];

  maxImages = 5;
  minImagesRequired = 3;

  constructor() {
    // initialize with one product
    this.addProduct();
  }

  addProduct() {
    this.products.push({
      images: Array(this.maxImages).fill(null),
      price: null,
      description: ''
    });
  }

  onImageChange(productIndex: number, imgIndex: number, event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.products[productIndex].images[imgIndex] = input.files[0];
    }
  }

  removeProduct(index: number) {
    this.products.splice(index, 1);
  }

  upload() {
    // Example: check if each product has at least minImages, price, description
    for (const prod of this.products) {
      const validImages = prod.images.filter(f => f !== null);
      if (validImages.length < this.minImagesRequired) {
        alert('Each product must have at least 3 images.');
        return;
      }
      if (prod.price == null || prod.description.trim() === '') {
        alert('Each product must have price and description.');
        return;
      }
    }

    // TODO: send via HTTP to backend
    console.log('Uploading:', this.products);
  }

  getObjectURL(file: File | null): string {
  if (!file) return '';
  return URL.createObjectURL(file);
  }

}
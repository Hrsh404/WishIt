import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VendorService } from './vendor.service';

export interface VendorProduct {
  name: string;
  description: string;
  price: number | null;
  stockQuantity: number | null;
  vendorId: number | null;
  images: (File | null)[];
  categoryId:number| null;
}

interface Category {
  id: number;
  name: string;
}

@Component({
  selector: 'app-vendor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './vendor.html',
  styleUrl: './vendor.scss'
})
export class Vendor {

  products: VendorProduct[] = [];

  maxImages = 6;
  minImagesRequired = 3;

  categories: Category[] = [
  { id: 1, name: 'Electronics' },
  { id: 2, name: 'Fashion' },
  { id: 3, name: 'Books' },
  { id: 4, name: 'Home & Kitchen' },
  { id: 5, name: 'Sports' }
];

  constructor(private vendorService: VendorService) {
    this.addProduct();
  }

  addProduct(): void {

    this.products.push({
      name: '',
      description: '',
      price: null,
      stockQuantity: null,
      categoryId:null,
      vendorId: 1, // replace with logged-in vendor id
      images: Array(this.maxImages).fill(null)

    });

  }

  

  onImageChange(
    productIndex: number,
    imgIndex: number,
    event: Event
  ): void {

    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.products[productIndex].images[imgIndex] =
        input.files[0];
    }

  }

  removeProduct(index: number): void {
    this.products.splice(index, 1);
  }

  upload(): void {

    for (const product of this.products) {

      const validImages =
        product.images.filter(img => img !== null);

      if (validImages.length < this.minImagesRequired) {
        alert('Each product must have at least 3 images');
        return;
      }

      product.name="Test product 1";
      if (!product.name.trim()) {
        alert('Product name is required');
        return;
      }

      if (!product.description.trim()) {
        alert('Description is required');
        return;
      }

      if (product.price == null || product.price <= 0) {
        alert('Valid price is required');
        return;
      }

      product.stockQuantity=200;
      if (
        product.stockQuantity == null ||
        product.stockQuantity <= 0
      ) {
        alert('Valid stock quantity is required');
        return;
      }

    }

    this.products.forEach(product => {

      const formData = new FormData();

      formData.append('name', product.name);
      formData.append('description', product.description);
      formData.append('price', String(product.price));
      formData.append(
        'stockQuantity',
        String(product.stockQuantity)
      );
      formData.append(
        'vendorId',
        String(product.vendorId)
      );

      product.images.forEach(image => {

        if (image) {
          formData.append('images', image);
        }

      });

      this.vendorService
        .addProduct(formData)
        .subscribe({
          next: (res) => {
            console.log('Uploaded', res);
          },
          error: (err) => {
            console.error(err);
          }
        });

    });

    alert('Products uploaded successfully');

  }

  getObjectURL(file: File | null): string {

    if (!file) {
      return '';
    }

    return URL.createObjectURL(file);

  }

}
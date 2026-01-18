import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
// import { Carousel } from 'bootstrap';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {

  products: any[] = [];

  // 🔼 Top carousel (1–20)
  carouselSlides: any[][] = [];

  // 🔽 Bottom carousel (21–40)
  carouselSlidesBottom: any[][] = [];

  // ✅ IMPORTANT FLAG
  isLoaded = false;

  constructor(public router: Router) {}

  ngOnInit(): void {
    fetch('/assets/products.json')
      .then(res => res.json())
      .then(data => {
        const allProducts = data.products || [];

        // Top carousel → products 1–20
        const topProducts = allProducts.slice(0, 20);
        this.carouselSlides = this.groupProducts(topProducts, 4);

        // Bottom carousel → products 21–40
        const bottomProducts = allProducts.slice(20, 40);
        this.carouselSlidesBottom = this.groupProducts(bottomProducts, 4);

        // ✅ render carousel AFTER data loads
        this.isLoaded = true;
      })
      .catch(err => {
        console.error('Failed to load products.json', err);
      });
  }

  groupProducts(products: any[], groupSize: number): any[][] {
    const result: any[][] = [];
    for (let i = 0; i < products.length; i += groupSize) {
      result.push(products.slice(i, i + groupSize));
    }
    return result;
  }

  goToProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
}
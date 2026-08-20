import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from '../product.component';
import { ProductService } from '../product.services';


@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.scss']
})
export class ProductDetails implements OnInit {

  product!: Product;

  selectedImage = 0;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const navigation =
    this.product = history.state.product;

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    // this.productService
    //   .getProductById(id)
    //   .subscribe(product => {
    //     this.product = product;
    //   });
  }

  selectImage(index: number): void {
    this.selectedImage = index;
  }

  addToCart(): void {
    console.log('Added:', this.product);
  }

  viewMoreProducts(): void {
  this.router.navigate(['/products']);
}
}
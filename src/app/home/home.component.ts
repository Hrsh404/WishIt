import { Component,CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import productData from '../../assets/products.json';



@Component({
  selector: 'app-home',
  standalone:true,
  imports: [CommonModule, RouterLink, ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  templateUrl: './home.component.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
   

  products: any[] = [];

  ngOnInit() {
    this.products = productData.products;
}
}
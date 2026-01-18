import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-order',
  imports: [RouterModule, CommonModule],
  templateUrl: './order.html',
  styleUrl: './order.scss'
})
export class Order {

  orders = [
    {
      id: '123-456789-01',
      date: 'January 4, 2026',
      total: 45.99,
      status: 'Delivered',
      item: 'Wireless Headphones'
    },
    {
      id: '987-654321-02',
      date: 'December 28, 2025',
      total: 12.50,
      status: 'Shipped',
      item: 'USB-C Charging Cable'
    }
  ];

}

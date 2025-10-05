import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Pagination } from '../../services/pagination';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, InfiniteScrollModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.scss']
})
export class ProductList implements OnInit {
  items: string[] = [];
  isLoading = false;
  currentPage = 1;
  itemsPerPage = 32;

  constructor(
    private paginationService: Pagination,
    private cdr: ChangeDetectorRef
  ) {}

  toggleLoading = () => (this.isLoading = !this.isLoading);

  loadData = () => {
    this.toggleLoading();
    this.currentPage = 1;    // reset to first page
    this.items = [];         // clear previous items

    this.paginationService.getItems(this.currentPage, this.itemsPerPage).subscribe({
      next: response => {
        this.items = [...this.items, ...response]; // ✅ append instead of overwrite
        this.cdr.detectChanges();                  // ✅ force UI refresh
      },
      complete: () => this.toggleLoading()
    });
  };

  appendData = () => {
    this.toggleLoading();
    this.paginationService.getItems(this.currentPage, this.itemsPerPage).subscribe({
      next: response => {
        this.items = [...this.items, ...response]; // ✅ append
        this.cdr.detectChanges();                  // ✅ refresh UI
      },
      complete: () => this.toggleLoading()
    });
  };

  ngOnInit(): void {
    this.loadData();
  }

  onScroll = () => {
    this.currentPage++;
    this.appendData();
  };
}

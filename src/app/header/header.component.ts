import { Component, Input, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router, RouterLink,NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
 isChanged = false;
 router = inject(Router);
 toggleChange(){
  this.isChanged = !this.isChanged;
 }
  private routerSubscription: any;

  ngOnInit(): void {
    // Subscribe to router events
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isChanged = false; // Close menu on route change
      }
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe to prevent memory leaks
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  //Seach icon starts from here

  // onSearch(query: string) {
  //   console.log('Searching for:', query);
  // //Seach icon ends from here

  // }
}

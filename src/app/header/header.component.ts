import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 
 router = inject(Router);
  //Seach icon starts from here

  // onSearch(query: string) {
  //   console.log('Searching for:', query);
  // //Seach icon ends from here

  // }
}

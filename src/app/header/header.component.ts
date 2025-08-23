import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Needed for *ngFor

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule], // <-- Add this
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title = 'Ddsffsfsdfsdfm';



  //Seach icon starts from here

  // onSearch(query: string) {
  //   console.log('Searching for:', query);
  // //Seach icon ends from here

  // }
}

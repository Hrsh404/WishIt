import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,                 // ✅ mark as standalone
  imports: [CommonModule],          // ✅ allows *ngIf, *ngFor, etc.
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']  // ✅ use styleUrls (plural)
})
export class ProfileComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  managePassword() {
    alert('Redirect to password management page...');
  }

  logout() {
    alert('Logging out...');
  }
}

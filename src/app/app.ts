import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'; // <-- Import your header
import { Home } from './home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // standalone root, A root directory!!!! Don't fuck with root!
  imports: [RouterOutlet, HeaderComponent,CommonModule], 
  templateUrl: './app.html',
  styleUrls: ['./app.scss'] 
})
export class App {
  protected readonly title = signal('WishIt');
}

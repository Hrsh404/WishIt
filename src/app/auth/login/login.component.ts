import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user = {
    username:'',
    password:''
  }

  constructor(private authService: AuthService){}

  loginUser(){
    this.authService.login(this.user).subscribe({
      next: (res) => {
        console.log('Login successful:', res.userData);
        alert('User logged in successfully!');
      },
      error: (err) => {
        console.error('Error:', err);
        alert('Something went wrong.');
      }
    });
  }
}

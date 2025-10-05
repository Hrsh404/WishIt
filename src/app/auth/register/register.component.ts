import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../auth-service';
@Component({
  selector: 'app-register',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: '',
 
  };
  constructor(private authService: AuthService) {}



  onSubmit(){
   this.authService.register(this.user).subscribe({
      next: (res) => {
        console.log('Success:', res);
        alert('User registered successfully!');
      },
      error: (err) => {
        console.error('Error:', err);
        alert('Something went wrong.');
      }
    });
  }
}

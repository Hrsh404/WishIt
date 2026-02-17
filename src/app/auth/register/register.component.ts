import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../auth-service';
@Component({
  selector: 'app-register',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  user = {
    name: '',
    email: '',
    password: '',
    businessName: '',
    gstNumber: '',
    businessAddress: '',
  };

  constructor(private authService: AuthService) {}

  registerUser(){
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

  isLoggedIn = false;
  loggedInUser:any;
  isVendor = false;

  ngOnInit():void{
    this.loggedInUser = this.authService.loggedInUser$.subscribe(user => {
    this.loggedInUser = user;
    this.isLoggedIn = !!user;
    console.log(this.loggedInUser,user);
    });
  }

  registerVendor(){
    
  }
}

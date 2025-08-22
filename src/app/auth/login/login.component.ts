import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user = {
    username:'',
    password:''
  }
  loginUser(){
    if (this.user.username == 'testone' && this.user.password == 'password'){
      alert('Login Successfull....');
    }
    else{
      alert('Username and password does not match');
    }
  }
}

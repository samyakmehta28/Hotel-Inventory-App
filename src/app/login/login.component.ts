import { LoginService } from './login.service';
import { PasswordValidatorDirective } from './../passwordValidator/password-validator.directive';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HoverDirective } from '../hover.directive';
import {Router } from '@angular/router';

export interface UserLogin {
  email: string;
  password: string;
}

@Component({
  selector: 'hinv-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HoverDirective, PasswordValidatorDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  userLogin: UserLogin = {
    email: '',
    password: ''
  }

  constructor(private route: Router, private loginService:LoginService) { }

  login(loginForm: NgForm){
    if(this.loginService.login(this.userLogin)){
      this.route.navigateByUrl('/rooms');
    }
    else{
      alert('Login Failed');
    }

    setTimeout(() => {
      loginForm.resetForm({
        email: '',
        password: ''
      });
    }, 500); // 1000 milliseconds = 1 seconds
  }
}

import { UserLogin } from './login.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn:boolean = false;
  isAdmin:boolean = false;

  constructor() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    this.isAdmin = localStorage.getItem('isAdmin') === 'true';
   }

  login(userLogin:UserLogin){
    if(userLogin.email === 'admin@gmail.com' && userLogin.password === 'admin'){
      this.isLoggedIn = true;
      this.isAdmin = true;
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('isAdmin', 'true');
    }
    else if(userLogin.email === 'user@gmail.com' && userLogin.password === 'user1'){
      this.isLoggedIn = true;
      this.isAdmin = false;
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.removeItem('isLoggedIn');
    }
    else{
      this.isLoggedIn = false;
      this.isAdmin = false;
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('isAdmin');
    }
    return this.isLoggedIn;
  }
}

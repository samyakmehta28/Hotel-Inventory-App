import { CanActivateFn, CanMatchFn } from '@angular/router';
import { LoginService } from '../login/login.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';


export const loginGuard:CanActivateFn = (route,state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  console.log("login Service", loginService.isLoggedIn);
  return loginService.isLoggedIn? true: router.navigateByUrl('/login');
}

export const canMatchGuard: CanMatchFn = (route,state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  //console.log("login Service", loginService.isLoggedIn);
  return loginService.isLoggedIn? true: router.navigateByUrl('/login');
}

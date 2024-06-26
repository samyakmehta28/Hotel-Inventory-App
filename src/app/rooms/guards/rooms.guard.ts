import { CanActivateChildFn } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../../login/login.service';
import { Router } from '@angular/router';

export const roomsGuard: CanActivateChildFn = (childRoute, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  return loginService.isAdmin? true: router.navigateByUrl('/rooms');
};

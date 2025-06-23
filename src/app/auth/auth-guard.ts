import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from '../services/login'

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loginService = inject(LoginService);
  
  if (loginService.getUserId()) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};

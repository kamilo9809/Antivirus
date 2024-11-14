import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../components/pages/login/services/auth.service';
import { inject } from '@angular/core';

export const  authGuard: CanActivateFn =  async (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {

  let authService = inject(AuthService)
  let router = inject(Router)

  const isAuthenticated = authService.isUserAuthenticate()

  if (isAuthenticated) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }

}

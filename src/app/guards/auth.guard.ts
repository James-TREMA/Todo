import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;  // Autorisation d'accéder à la route
  } else {
    router.navigate(['/login']);  // Redirection vers la page login si l'utilisateur n'est pas authentifié
    return false;
  }
};

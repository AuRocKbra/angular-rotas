import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../servicos/auth.service';

export const AuthGuard: CanActivateFn = () =>{
  const authService = inject(AuthService);
  const router = inject(Router);
  if(!authService.estaAutenticado()){
    router.navigate(["/login"])
    return false;
  }
  return true;
}

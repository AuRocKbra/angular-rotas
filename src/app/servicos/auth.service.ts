import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private autenticado = signal<boolean>(false);

  login(){
    this.autenticado.set(true);
  }

  logout(){
    this.autenticado.set(false);
  }

  estaAutenticado(){
    return this.autenticado();
  }
}

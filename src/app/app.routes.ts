import { Routes } from '@angular/router';
import {RegistroComponent} from './paginas/registro/registro.component';
import {ListaPostagemComponent} from './paginas/lista-postagem/lista-postagem.component';
import {AuthGuard} from './guards/auth.guard';
export const routes: Routes = [
  {path: 'login',component: RegistroComponent},
  {path: 'posts',canActivate:[AuthGuard],component: ListaPostagemComponent},
  {path: '**',component: RegistroComponent}
];

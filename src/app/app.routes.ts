import { Routes } from '@angular/router';
import {RegistroComponent} from './paginas/registro/registro.component';
import {ListaPostagemComponent} from './paginas/lista-postagem/lista-postagem.component';
import {AuthGuard} from './guards/auth.guard';
import {LayoutComponent} from './componentes/layout/layout.component';
import {DetalhesPostagemComponent} from './paginas/detalhes-postagem/detalhes-postagem.component';
export const routes: Routes = [
  {path: 'login',component: RegistroComponent},
  {path: '',canActivate:[AuthGuard],component: LayoutComponent,children:[
      {path:'posts',component: ListaPostagemComponent},
      {path:'posts/:id',component: DetalhesPostagemComponent}
    ]},
  {path: '**',component: RegistroComponent}
];

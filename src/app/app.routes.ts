import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { Login } from './login/login';
import { Register } from './user/register/register';
import { PaginaUsuario } from './pagina-usuario/pagina-usuario';
import { AgregarLibro } from './agregar-libro/agregar-libro';
import { authGuard } from './auth/auth-guard' // esto me sirve para proteger mis rutas , que se pueda acceder si el usuario esta logueado



export const routes: Routes = [
     { path: '', component: Landing },
     { path: 'login', component: Login },
     { path: 'register', component: Register },
     {
          path: 'usuario',
          component: PaginaUsuario,
          canActivate: [authGuard]
     },
     {
          path: 'agregarLibro',
          component: AgregarLibro,
          canActivate: [authGuard]
     },
     {
          path: 'usuario/book/:id',
          component: AgregarLibro,
          canActivate: [authGuard]
     }
];

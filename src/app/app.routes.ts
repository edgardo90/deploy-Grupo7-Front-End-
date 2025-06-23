import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { Login } from './login/login'
import { Register } from './user/register/register'
import { AgregarLibro } from './agregar-libro/agregar-libro'

export const routes: Routes = [
     { path: '', component: Landing },
     { path: 'login', component: Login },
     { path: 'register', component: Register },
     { path: 'agregarLibro', component: AgregarLibro }
];

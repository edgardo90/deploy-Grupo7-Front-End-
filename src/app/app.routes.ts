import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { PaginaUsuario } from './pagina-usuario/pagina-usuario';
import { FormularioLibro } from './formulario-libro/formulario-libro'; // Cambiarlo por el nombre real del componente cuando lo creen

export const routes: Routes = [
     { path: '', component: Landing},
     { path: 'usuario', component: PaginaUsuario},
     { path: 'usuario/agregar-libro', component: FormularioLibro }, // Ruta futura para el formulario
];

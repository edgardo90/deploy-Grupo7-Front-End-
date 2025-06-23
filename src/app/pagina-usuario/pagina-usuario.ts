import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BarraLateral } from '../barra-lateral/barra-lateral';
import { NgIf } from '@angular/common';
import { IBook } from '../interfaces/book'

@Component({
  selector: 'app-pagina-usuario',
  standalone: true,
  imports: [BarraLateral, NgIf],
  templateUrl: './pagina-usuario.html',
  styleUrl: './pagina-usuario.css'
})
export class PaginaUsuario {
  constructor(private router: Router){} 
  vistaActual = 'libros';
  libros: IBook[] = []; // <- por ahora vacía, luego se llenará con datos reales

  mostrarVista(vista: string){
  this.vistaActual = vista;
}
  irAAgregarLibro() {
    this.router.navigate(['/agregarLibro'])
  }
}


import { Component,  EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-barra-lateral',
  standalone: true,
  imports: [],
  templateUrl: './barra-lateral.html',
  styleUrl: './barra-lateral.css'
})
export class BarraLateral {
  @Output() cambiarVista = new EventEmitter<string>();
}

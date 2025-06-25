import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import {BarraLateral} from '../barra-lateral/barra-lateral';
import { ICollection } from '../interfaces/collection';
import { LoginService } from '../services/login';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-mis-colecciones',
  imports: [BarraLateral],
  templateUrl: './mis-colecciones.html',
  styleUrl: './mis-colecciones.css'
}) 
export class MisColecciones implements OnInit {

colecciones: ICollection[] = [];
  vistaActual = 'colecciones';


  constructor(private router: Router, private userService: UserService, private loginService: LoginService) {}

   irCrearColeccion() {
    console.log("irCrearColeccion");
    this.router.navigate(['/crearColeccion'])
  }


  ngOnInit(): void {
    let usuario;
    console.log(usuario, "cuando inicia");
    console.log(this.colecciones, " cuando inicia la variablea sergio")
    const userId = this.loginService.getUserId() as string
    this.userService.getUserByid(userId).subscribe(({
      next: (response) => {
        usuario = response.data;
        console.log(usuario, "viendo desde el next")
        if (response.data?.collections) {
          this.colecciones = response.data?.collections
        }
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log("funcionaaa")
        console.log(this.colecciones)
      },
    }))
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarraLateral } from '../barra-lateral/barra-lateral';
import { NgIf } from '@angular/common';
import { IBook } from '../interfaces/book';
import { UserService } from '../services/user-service';
import { LoginService } from '../services/login';

@Component({
  selector: 'app-pagina-usuario',
  standalone: true,
  imports: [BarraLateral, NgIf],
  templateUrl: './pagina-usuario.html',
  styleUrl: './pagina-usuario.css'
})
export class PaginaUsuario implements OnInit {

  vistaActual = 'libros';
  libros: IBook[] = []; // <- por ahora vacía, luego se llenará con datos reales

  constructor(private router: Router, private userService: UserService ,private loginService: LoginService ) { }

  //esto ya funciona pero tiren magia y si quieren comenten.
  ngOnInit(): void {
    let usuario;
    console.log(usuario , "cuando inicia");
    console.log(this.libros, " cuando inicia la variablea sergio")
    const userId =  this.loginService.getUserId() as string
    this.userService.getUserByid(userId).subscribe(({
      next:(response) =>{
        usuario = response.data;
        console.log(usuario , "viendo desde el next")
        if(response.data?.books){
          this.libros = response.data?.books
        }
      },
      error:(err) => {
        console.log(err)
      },
      complete:() =>{
        console.log("funcionaaa")
        console.log(this.libros)
      },
    }))
  }

  mostrarVista(vista: string) {
    this.vistaActual = vista;
  }
  irAAgregarLibro() {
    this.router.navigate(['/agregarLibro'])
  }
}


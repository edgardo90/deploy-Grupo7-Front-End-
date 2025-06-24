import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';;
import { BarraLateral } from '../barra-lateral/barra-lateral';
import { IBook } from '../interfaces/book';
import { UserService } from '../services/user-service';
import { LoginService } from '../services/login';
import { BookService } from '../services/book-servie';

@Component({
  selector: 'app-pagina-usuario',
  standalone: true,
  imports: [BarraLateral, CommonModule , RouterLink],
  templateUrl: './pagina-usuario.html',
  styleUrl: './pagina-usuario.css'
})
export class PaginaUsuario implements OnInit {

  vistaActual = 'libros';
  libros: IBook[] = []; // <- por ahora vacía, luego se llenará con datos reales

  constructor(private router: Router, private userService: UserService, private loginService: LoginService, private bookService: BookService) { }

  //esto ya funciona pero tiren magia y si quieren comenten.
  ngOnInit(): void {
    let usuario;
    console.log(usuario, "cuando inicia");
    console.log(this.libros, " cuando inicia la variablea sergio")
    const userId = this.loginService.getUserId() as string
    this.userService.getUserByid(userId).subscribe(({
      next: (response) => {
        usuario = response.data;
        console.log(usuario, "viendo desde el next")
        if (response.data?.books) {
          this.libros = response.data?.books
        }
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
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
  eliminarLibro(libroId: string): void {
    const confirmar = confirm("¿Estás seguro de que querés eliminar este libro?");
    if (!confirmar) return;

    this.bookService.deleteBook(libroId)
      .subscribe({
        next: () => {
          alert("Libro eliminado con éxito");
          this.libros = this.libros.filter(libro => libro._id !== libroId);
        },
        error: (err: any) => {
          console.error(err);
          alert("Hubo un error al eliminar el libro");
        }
      });
  }


}


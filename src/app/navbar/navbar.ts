import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { LoginService } from '../services/login';
import { filter } from 'rxjs/operators';
import { IUser } from '../interfaces/user'

@Component({
  selector: 'app-navbar', 
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  user: Partial<IUser> = {};

  ngOnInit(): void {
    //con est
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      // Esto se ejecuta cada vez que se cambia de ruta
      console.log(this.loginService.getUserId());
      if (this.loginService.getUserId()) {
        this.user._id = this.loginService.getUserId() as string;
      }
      if (this.loginService.getUserName()) {
        this.user.name = this.loginService.getUserName() as string;
      }
      if (this.loginService.getUserEmail()) {
        this.user._id = this.loginService.getUserId() as string;
      }
    });
  }

  logout() {
    const isConfirm = window.confirm("Quieres cerrar sesion ?");
    console.log(isConfirm)
    if (isConfirm) {
      this.loginService.logoutAndClear();
      this.router.navigate(['/']).then(() => {
        location.reload(); // recarga después de redirigir
      });
    }
  }

}

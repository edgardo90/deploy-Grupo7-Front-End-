import { Component,  EventEmitter, OnInit, Output } from '@angular/core';
import { IUser } from '../interfaces/user'
import {LoginService} from '../services/login'
import { Router } from '@angular/router'


@Component({
  selector: 'app-barra-lateral',
  standalone: true,
  imports: [],
  templateUrl: './barra-lateral.html',
  styleUrl: './barra-lateral.css'
})
export class BarraLateral implements OnInit{

  constructor(private loginService: LoginService, private router: Router){

  }
  user: Partial<IUser> = {};
  
  @Output() cambiarVista = new EventEmitter<string>();

  ngOnInit(): void {
    if (this.loginService.getUserName()){
      this.user.name = this.loginService.getUserName() as string
    }
    if (this.loginService.getUserEmail()){
      this.user.email = this.loginService.getUserEmail() as string
    }
  }

  logout() {
    const isConfirm = window.confirm("Quieres cerrar sesion ?");
    console.log(isConfirm)
    if (isConfirm) {
      this.loginService.logoutAndClear();
      this.router.navigate(['/']).then(() => {
        location.reload(); // Recarga despues de redirigir
      })
    }
  }
}

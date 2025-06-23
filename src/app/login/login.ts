import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { LoginService } from '../services/login';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loading: boolean = false;
  // Define tu FormGroup
  // Este FormGroup representa todo el formulario de login
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]) // Contraseña de al menos 6 caracteres
  });


  constructor(private loginService: LoginService, private router: Router) { }

  // Getters para acceder fácilmente a los controles en la plantilla HTML
  get email() {
    return this.loginForm.get('email') as FormControl
  }

  get password() {
    return this.loginForm.get('password') as FormControl
  }

  onSubmit(): void {
    // console.log(this.password.errors)
    // console.log("valido: ", this.loginForm.valid)
    // console.log("invalido: ", this.loginForm.invalid)
    if (this.loginForm.invalid && (!this.loginForm.value.email || !this.loginForm.value.password)) {
      this.loginForm.markAllAsTouched(); // fuerza que se muestren los errores en pantalla
      return alert("Error!, por favor completa los datos")
    }
    if (this.loginForm.valid) {
      this.loading = true
      const jsonData = {
        email: this.loginForm.value.email as string,
        password: this.loginForm.value.password as string
      }
      this.loginService.postLogin(jsonData.email, jsonData.password).subscribe(({
        next: (response) => {
          console.log(response);
          if (response.data) {
            const user = response.data
            this.loginService.saveUserEmail(user);
            this.loginService.saveUserName(user);
            this.loginService.saveUserId(user)
          }
        },
        error: (err: any) => {
          console.log(err);
          this.loading = false;
          return alert(err.error.message)
        },
        complete: () => {
          console.log("se completo con exito");
          this.loading = false;
          alert("Ingreso exitoso!");
          setTimeout(() => {
            this.router.navigate(['/']);// esto envia al inicio de la pagina , despues lo cambian para que lo envie al home del user para que vea sus libros , etc..
          }, 400)
        },
      }))
    }
  }

}

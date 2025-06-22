import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // <-- ¡Importa estos!
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  // Define tu FormGroup
  // Este FormGroup representa todo tu formulario de login
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]) // Contraseña de al menos 6 caracteres
  });

  // Getters para acceder fácilmente a los controles en la plantilla HTML
  get email() {
    return this.loginForm.get('email') as FormControl
  }

  get password() {
    return this.loginForm.get('password') as FormControl 
  }

  // 3. Método para manejar el envío del formulario
  onSubmit(): void {
    // console.log({
    //   email: this.loginForm.value.email,
    //   password: this.loginForm.value.password
    // })
    console.log(this.password.errors)
    console.log("valido: ", this.loginForm.valid)
    console.log("invalido: ", this.loginForm.invalid)
    if (this.loginForm.invalid && (!this.loginForm.value.email || !this.loginForm.value.password)) {
      return alert("Error!, por favor completa los datos")
    }
    if (this.loginForm.valid) {
      return alert("Ingreso exitoso!");
    }
    // if (this.loginForm.valid) {
    //   console.log('Formulario de Login Válido. Valores:', this.loginForm.value);
    //   console.log('Simulando login exitoso...');
    //   setTimeout(() => {
    //     // this.router.navigate(['/']); // Redirigir a la ruta raíz después de 2 segundos
    //   }, 2000);
    // } else {
    //   // Si el formulario no es válido, puedes mostrar un mensaje o
    //   // marcar todos los campos como 'tocados' para que los mensajes de error aparezcan
    //   console.log('Formulario de Login Inválido.');
    //   this.loginForm.markAllAsTouched();
    // }
  }

}

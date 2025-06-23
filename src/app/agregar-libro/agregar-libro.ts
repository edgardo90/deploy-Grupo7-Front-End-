import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-agregar-libro',
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-libro.html',
  styleUrl: './agregar-libro.css'
})
export class AgregarLibro {


// Este FormGroup representa todo el formulario de login
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]) // Contraseña de al menos 6 caracteres
  });



}

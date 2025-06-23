import { Component } from '@angular/core';
import { RouterLink , Router } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user-service'


@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  loading: boolean = false;

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private userService: UserService , private router: Router) { }

  // Getters para acceder fácilmente a los controles en la plantilla HTML
  get name() {
    return this.userForm.get('name') as FormControl
  }

  get email() {
    return this.userForm.get('email') as FormControl
  }

  get password() {
    return this.userForm.get('password') as FormControl
  }


  onSubmit(): void {
    console.log(this.name.errors)
    if (this.userForm.invalid && (!this.userForm.value.email || !this.userForm.value.password || !this.userForm.value.name)) {
      this.userForm.markAllAsTouched(); // fuerza que se muestren los errores en pantalla
      return alert("Error!, por favor completa los datos para registrarte")
    }
    if (this.userForm.valid) {
      const jsonData = {
        name: this.userForm.value.name as string,
        email: this.userForm.value.email as string,
        password: this.userForm.value.password as string
      }
      this.loading = true
      this.userService.postCreateUser(jsonData.name , jsonData.email , jsonData.password).subscribe(({
        next: (response) => {
          console.log(response);
        },
        error: (err: any) => {
          console.log(err);
          this.loading = false;
          return alert(err.error.message)
        },
        complete: () => {
          console.log("se completo con exito");
          this.loading = false;
          alert("Felicitaciones!. Registro exitoso!");
          setTimeout(() => {
            this.router.navigate(['/login']);// esto envia al inicio de la pagina , despues lo cambian para que lo envie al home del user para que vea sus libros , etc..
          }, 400)
        },
      }))
    }
  }


}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book-servie'
import { LoginService } from '../services/login';


@Component({
  selector: 'app-agregar-libro',
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-libro.html',
  styleUrl: './agregar-libro.css'
})
export class AgregarLibro implements OnInit {
  loading: boolean = false;
  bookId = '';


  addForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    editorial: new FormControl(''),
    imageURL: new FormControl('')
  });

  constructor(
    private bookService: BookService,
    private router: Router,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (response) => {
        this.bookId = response['id']
      },
      error: (err) => {
        console.log(err)
      },
    });
    if (this.bookId) {
      this.bookService.getBookByid(this.bookId).subscribe({
        next: (response) => {
          // console.log(response);
          if (response.data) {
            this.addForm.get('title')?.setValue(response.data.title ?? '');
            this.addForm.get('author')?.setValue(response.data.author ?? '');
            this.addForm.get('category')?.setValue(response.data.category ?? '');
            this.addForm.get('genre')?.setValue(response.data.genre ?? '');
            this.addForm.get('description')?.setValue(response.data.description ?? '');
            this.addForm.get('editorial')?.setValue(response.data.editorial ?? '');
            this.addForm.get('imageURL')?.setValue(response.data.imageURL ?? '');
          }
        },
        error: (err) => {
          console.log(err)
        },
        complete: () => {
          console.log("Respuesta con exito de encontrar book por id")
        },
      })
    }
  }


  get title() {
    return this.addForm.get('title') as FormControl;
  }

  get author() {
    return this.addForm.get('author') as FormControl;
  }

  get category() {
    return this.addForm.get('category') as FormControl;
  }

  get genre() {
    return this.addForm.get('genre') as FormControl;
  }

  get description() {
    return this.addForm.get('description') as FormControl;
  }

  get editorial() {
    return this.addForm.get('editorial') as FormControl;
  }

  get imageURL() {
    return this.addForm.get('imageURL') as FormControl;
  }

  onSubmit(): void {
    if (this.addForm.invalid) {
      this.addForm.markAllAsTouched();
      return alert("Error: por favor completá todos los campos obligatorios");
    }
    if (this.addForm.valid) {
      this.loading = true
      const jsonData = {
        title: this.addForm.value.title as string,
        author: this.addForm.value.author as string,
        category: this.addForm.value.category as string,
        genre: this.addForm.value.genre as string,
        description: this.addForm.value.description as string,
        editorial: this.addForm.value.editorial as string,
        imageURL: this.addForm.value.imageURL as string,
      };
      this.bookService.postBook(
        jsonData.title,
        jsonData.author,
        jsonData.category,
        jsonData.genre,
        jsonData.description,
        jsonData.editorial,
        jsonData.imageURL,
        this.loginService.getUserId() as string
      ).subscribe(({
        next: (response) => {
          console.log("pasa por el next")
          console.log(response);
        },
        error: (err) => {
          console.log("pasa por el error")
          return alert(err.error.message)
        },
        complete: () => {
          console.log("se completo con exito");
          this.loading = false;
          alert("Se registro tu libro con exito!");
          setTimeout(() => {
            this.router.navigate(['/usuario']);
          }, 400)
        },
      }))
    }

  }

  volveraLibros() {
    this.router.navigate(['/usuario'])
  }

  onEdit() {
    if (this.addForm.invalid) {
      this.addForm.markAllAsTouched();
      return alert("Error: por favor completá todos los campos obligatorios");
    }
    if (this.addForm.valid) {
      this.loading = true
      const jsonData = {
        title: this.addForm.value.title as string,
        author: this.addForm.value.author as string,
        category: this.addForm.value.category as string,
        genre: this.addForm.value.genre as string,
        description: this.addForm.value.description as string,
        editorial: this.addForm.value.editorial as string,
        imageURL: this.addForm.value.imageURL as string,
      };
      this.bookService.patchBookId(
        this.bookId,
        jsonData.title,
        jsonData.author,
        jsonData.category,
        jsonData.genre,
        jsonData.description,
        jsonData.editorial,
        jsonData.imageURL,
      ).subscribe(({
        next: (response) => {
          console.log("pasa por el next")
          console.log(response);
        },
        error: (err) => {
          console.log("pasa por el error")
          return alert(err.error.message)
        },
        complete: () => {
          console.log("se completo con exito");
          this.loading = false;
          alert("Se edito tu libro con exito!");
          setTimeout(() => {
            this.router.navigate(['/usuario']);
          }, 400)
        },
      }))
    }
  }
}








import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-agregar-libro',
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-libro.html',
  styleUrl: './agregar-libro.css'
})
export class AgregarLibro {
  loading: boolean = false;


addForm = new FormGroup({
  title: new FormControl('', [Validators.required]),
  author: new FormControl('', [Validators.required]),
  category: new FormControl('', [Validators.required]),
  genre: new FormControl('', [Validators.required]),
  description: new FormControl(''), 
  editorial: new FormControl(''),
  image: new FormControl('')
});

//ESTO FALTA 
//onstructor(private agregarLibroService: agregarLibroService, private router: Router) { }

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

get image() {
  return this.addForm.get('image') as FormControl;
}

onSubmit(): void {
  if (this.addForm.invalid) {
    this.addForm.markAllAsTouched(); 
    return alert("Error: por favor completá todos los campos obligatorios");
  }

  this.loading = true;

  const bookData = {
    title: this.title.value,
    author: this.author.value,
    category: this.category.value,
    genre: this.genre.value,
    description: this.description.value,
    editorial: this.editorial.value,
    image: this.image.value
  };

 // FALTA COMPLETAR ?
}




}

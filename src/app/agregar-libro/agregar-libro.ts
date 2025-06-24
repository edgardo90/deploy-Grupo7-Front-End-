import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


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


   if (this.addForm.valid) {
      this.loading = true
      const jsonData = {
        title: this.addForm.value.title as string,
        author: this.addForm.value.author as string,
        category: this.addForm.value.category as string,
        genre: this.addForm.value.genre as string,
        description: this.addForm.value.description as string,
        editorial: this.addForm.value.editorial as string,
        image: this.addForm.value.image as string,
        };

   
      

}
 
}
}




     



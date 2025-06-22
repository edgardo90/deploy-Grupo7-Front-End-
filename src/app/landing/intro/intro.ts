import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.html',
  styleUrl: './intro.css'
})
export class Intro {
  constructor(private router: Router) { }

  handleButtonNavigateLogin() {
    setTimeout(() => {
      this.router.navigate(['/login']); // Navigate to the 'login' route
    }, 300)
  }
}

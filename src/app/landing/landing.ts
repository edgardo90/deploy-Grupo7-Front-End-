import { Component } from '@angular/core';
import { Intro } from './intro/intro';
import { Acerca } from './acerca/acerca';
import { Masinfo } from './masinfo/masinfo';

@Component({
  selector: 'app-landing',
  imports: [Intro, Acerca, Masinfo],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing {

}

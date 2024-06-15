import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'beauty-parlour';
  menuActive: boolean = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
  }

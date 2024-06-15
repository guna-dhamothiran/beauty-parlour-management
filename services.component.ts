import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      name: 'Haircut',
      description: 'Stylish haircuts for all hair types.',
      image: 'assets/haircut.jpg'
    },
    {
      name: 'Manicure',
      description: 'Professional manicure services.',
      image: 'assets/manicure.jpg'
    },
    // Add more services as needed
  ];
}

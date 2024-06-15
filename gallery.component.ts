import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  cards = [
    {
      image: '../../assets/images/img5.jpg',
      title: 'Manicure',
      text: 'A refreshing hand treatment that includes nail shaping, cuticle care, and a relaxing massage.'
    },
    {
      image: '../../assets/images/img6.jpg',
      title: 'Pedicure',
      text: 'Pamper your feet with a thorough cleaning, nail care, and a soothing foot massage.'

    },
    {
      image: '../../assets/images/img7.jpg',
      title: 'Hair Styling',
      text: 'Get a new look with our professional hair styling services, including cuts, blowouts, and more.'
    },
    {
      image: '../../assets/images/img8.jpg',
      title: 'Facial',
      text: 'Rejuvenate your skin with our customized facial treatments designed to cleanse and nourish.'
    },
    {
      image: '../../assets/images/img2.jpg',
      title: 'Makeup',
      text: 'Perfect your look for any occasion with our expert makeup application services.'
    }
  ];
}

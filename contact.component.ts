import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  firstName: string = '';
  lastName: string = '';
  phone: string = '';
  subject: string = '';
  company: string = '';
  email: string = '';
  description: string = '';
  attachment: File | null = null;

  constructor() {}

  onSubmit() {
    // Simple form submission logic
    console.log('First Name:', this.firstName);
    console.log('Last Name:', this.lastName);
    console.log('Phone:', this.phone);
    console.log('Subject:', this.subject);
    console.log('Company:', this.company);
    console.log('Email:', this.email);
    console.log('Description:', this.description);
    console.log('Attachment:', this.attachment);

    // Clear the form after submission
    this.firstName = '';
    this.lastName = '';
    this.phone = '';
    this.subject = '';
    this.company = '';
    this.email = '';
    this.description = '';
    this.attachment = null;

    alert('Thank you for contacting us!');
  }
}

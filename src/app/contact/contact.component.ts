import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  phoneNumber = '+123-456-7890';
  emailAddress = 'ae.elsaeed315@gmail.com';
  linkedInUrl = 'https://www.linkedin.com/in/ahmed-elsaeed3152/';
}

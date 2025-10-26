import { Component } from '@angular/core';
import { aboutgetService } from '../aboutget.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  aboutText: string = '';

  constructor(private aboutgetservice: aboutgetService) {}

  ngOnInit(): void {
    this.aboutgetservice.getAbout().subscribe(
      (data) => {
        if (data.length > 0) {
          this.aboutText = data[0].abouttext;
        }
      },
      (error) => {
        console.error('Error fetching about text:', error);
      }
    );
  }
}

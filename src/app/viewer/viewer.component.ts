import { Component } from '@angular/core';

@Component({
  selector: 'app-viewer',
  standalone: true,
  imports: [],
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.scss',
})
export class ViewerComponent {
  content = '';
  about() {
    this.setcontent('about me');
  }
  blog() {
    this.setcontent('blog');
  }
  contact() {
    this.setcontent('contact');
  }
  projects() {
    this.setcontent('projects');
  }
  setcontent(content: string) {
    this.content = content;
  }
}

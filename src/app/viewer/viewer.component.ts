import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { BlogComponent } from '../blog/blog.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { MyprojectsComponent } from '../myprojects/myprojects.component';

@Component({
  selector: 'app-viewer',
  standalone: true,
  imports: [
    NgIf,
    BlogComponent,
    ContactComponent,
    AboutComponent,
    MyprojectsComponent,
  ],
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.scss',
})
export class ViewerComponent {
  content = '';
  expandedCard = '';

  about() {
    this.setcontent('about me');
    this.expandedCard = 'about';
  }
  blog() {
    this.setcontent('blog');
    this.expandedCard = 'blog';
  }
  contact() {
    this.setcontent('contact');
    this.expandedCard = 'contact';
  }
  projects() {
    this.setcontent('projects');
    this.expandedCard = 'projects';
  }
  setcontent(content: string) {
    this.content = content;
  }

  closeExpanded() {
    this.expandedCard = '';
    this.content = '';
  }

  getIconForCard(card: string): string {
    const icons: { [key: string]: string } = {
      blog: '../../assets/message-2.svg',
      projects: '../../assets/rocket.svg',
      about: '../../assets/circle-info.svg',
      contact: '../../assets/at-sign.svg',
    };
    return icons[card] || '';
  }

  getTitleForCard(card: string): string {
    const titles: { [key: string]: string } = {
      blog: 'Blog',
      projects: 'Projects',
      about: 'About Me',
      contact: 'Contact',
    };
    return titles[card] || '';
  }

  getDescriptionForCard(card: string): string {
    const descriptions: { [key: string]: string } = {
      blog: 'A working demo on back-end and database implementation',
      projects:
        'Showcase of my latest work and technical achievements (Uses Github API to update automatically)',
      about: 'Learn about my background, skills, and professional journey',
      contact: 'Get in touch for collaborations and opportunities',
    };
    return descriptions[card] || '';
  }
}

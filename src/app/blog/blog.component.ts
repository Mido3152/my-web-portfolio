import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  blogPosts = [
    {
      title: 'Lorem Ipsum in Web Design',
      excerpt:
        'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
      date: '2024-01-15',
    },
    {
      title: 'Test Test Test Testing',
      excerpt:
        'Testing is essential to ensure the quality and reliability of software applications.',
      date: '2024-01-10',
    },
    {
      title: 'Testing Angular Applications',
      excerpt:
        'this is filler text for testing angular applications in a blog component.',
      date: '2024-01-01',
    },
  ];
}

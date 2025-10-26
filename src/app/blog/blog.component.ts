import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { BloggetService } from '../blogget.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  blogs: any[] = [];
  constructor(private bloggetservice: BloggetService) {}
  ngOnInit(): void {
    this.bloggetservice.getBlogs().subscribe(
      (data) => {
        this.blogs = data;
      },
      (error) => {
        console.error('Error fetching blogs:', error);
      }
    );
  }
}

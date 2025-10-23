import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProjectgetService } from '../projectget.service';

@Component({
  selector: 'app-myprojects',
  standalone: true,
  imports: [HttpClientModule, NgFor],
  templateUrl: './myprojects.component.html',
  styleUrl: './myprojects.component.scss',
})
export class MyprojectsComponent {
  projects: any[] = [];
  constructor(private projectService: ProjectgetService) {}
  ngOnInit(): void {
    this.projectService.getProjects().subscribe(
      (data) => {
        this.projects = data;
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }
}

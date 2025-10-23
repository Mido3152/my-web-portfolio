import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectgetService {
  private apiUrl = 'https://api.github.com/users/mido3152/repos';
  constructor(private http: HttpClient) {}
  getProjects() {
    return this.http.get<any[]>(this.apiUrl);
  }
}

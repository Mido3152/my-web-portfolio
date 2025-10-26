import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BloggetService {
  private apiUrl = 'http://localhost:3000/blogs';

  constructor(private http: HttpClient) {}
  getBlogs() {
    return this.http.get<any[]>(this.apiUrl);
  }
}

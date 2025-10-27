import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BloggetService {
  private apiUrl = 'https://www.ahmedelsaeed.com/api/blogs';

  constructor(private http: HttpClient) {}
  getBlogs() {
    return this.http.get<any[]>(this.apiUrl);
  }
}

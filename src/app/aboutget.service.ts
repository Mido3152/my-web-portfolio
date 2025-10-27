import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class aboutgetService {
  private apiUrl = 'https://www.ahmedelsaeed.com/api/about';
  constructor(private http: HttpClient) {}
  getAbout() {
    return this.http.get<any[]>(this.apiUrl);
  }
}

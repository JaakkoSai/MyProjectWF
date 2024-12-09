import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiBase = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getBars() {
    return this.http.get(`${this.apiBase}/bars`);
  }

  getOrders() {
    return this.http.get(`${this.apiBase}/orders`);
  }
}

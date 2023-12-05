import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutobahnService {
  private apiUrl = 'https://autobahn.api.bund.dev';

  constructor(private http: HttpClient) { }

  getRoadworks() {
    return this.http.get(`${this.apiUrl}/roadworks`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutobahnService {
  private apiUrl = 'https://autobahn.api.bund.dev';

  constructor(private http: HttpClient) { }

  getRoadworks() {
    return this.http.get(`${this.apiUrl}/roadworks`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error('An error occurred'));
  }
}
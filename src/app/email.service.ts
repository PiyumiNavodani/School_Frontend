import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseUrl = 'http://localhost:8081/email'

  constructor(private http: HttpClient) { }

  sendMail(email: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}/sendMail`, email);
  }
}

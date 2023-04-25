import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8081/student'

  constructor(private http: HttpClient) { }

  getStudentById(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/getStudentById/${id}`);
  }

  createStudent(student: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}/addStudent`, student);
  }

  updateStudent(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updateStudent/${id}`, value);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteStudent/${id}`, { responseType: 'text' });
  }

  getStudentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getStudent`);
  }
}
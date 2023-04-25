import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private baseUrl = 'http://localhost:8081'

  constructor(private http:HttpClient) { }

  getTeacherById(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/teacher/getTeacherById/${id}`);
  }

  createTeacher(teacher: Object): Observable<any>{
    return this.http.post(`${this.baseUrl}/teacher/addTeacher`, teacher);
  }

  updateTeacher(id: number, value: any): Observable<any>{
    return this.http.put(`${this.baseUrl}/teacher/updateTeacher/${id}`, value);
  }

  deleteTeacher(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/teacher/deleteTeacher/${id}`, {responseType: 'text'});
  }

  getTeacherList(): Observable<any>{
    return this.http.get(`${this.baseUrl}/teacher/getTeacher`);
  }

}

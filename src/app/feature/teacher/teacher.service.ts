import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from './models/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(
    private http : HttpClient
  ) { }
  
  private initialUrlTeacher = 'http://localhost:8080/api/teacher';
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'user': 'admin:123'
    }),
  };

  public getAllTeacher() : Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.initialUrlTeacher}/findAll`, this.httpOptions);

  }

}
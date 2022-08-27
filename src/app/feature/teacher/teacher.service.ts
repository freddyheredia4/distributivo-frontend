import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from './models/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(
    private http: HttpClient
  ) { }
  
  private HttpOptions = {
    headers: new HttpHeaders({"Content-type":"application/json"})
  }

  private url : string = "http://localhost:8080/api/teacher";

  public findById(id : number): Observable<Teacher>{
    return this.http.get<Teacher>(this.url+"/findById/"+id, this.HttpOptions);
  }

  public findAll(): Observable<Teacher[]>{
    return this.http.get<Teacher[]>(this.url+"/findAll/", this.HttpOptions);
  }

  //public saveTeacher = (newLocation: Teacher): Observable<Teacher> => {
  //  return this.http.post<Teacher>(this.url+"/save", newLocation,this.HttpOptions);
  //};

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeacherDto } from '../models/teacherDto';

@Injectable({
  providedIn: 'root'
})
export class TeacherDtoService {

  constructor(
    private http : HttpClient,

  ) { }

  private httpOPtions = {
    headers : new HttpHeaders({
      "Conten-Type": "application/json"
    })
  }
  
  public url : string = "http://localhost:8080/api/teacherDto"

  public findAll(): Observable<TeacherDto[]>{
    return this.http.get<TeacherDto[]>(this.url+"/findAll")
  }

  public findByTeacherId( id : number ):Observable<TeacherDto>{
    return this.http.get<TeacherDto>(this.url+"/findByTeacherId/"+id, this.httpOPtions)
  }

}

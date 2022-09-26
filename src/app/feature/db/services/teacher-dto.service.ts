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
  
  public url : string = "http://localhost:8080/api/distributive"

  public findAll(): Observable<TeacherDto[]>{
    return this.http.get<TeacherDto[]>(this.url+"/findAll")
  }

  public findByTeacherId( id : number ):Observable<TeacherDto>{
    return this.http.get<TeacherDto>(this.url+"/findByIdTeacher/"+id, this.httpOPtions)
  }

  public findByIdDistributive(id:number):Observable<TeacherDto>{
    return this.http.get<TeacherDto>(this.url+"/findByIdDistributive/"+id, this.httpOPtions);
  }

  public findByDni(dni : string):Observable<TeacherDto[]>{
    return this.http.get<TeacherDto[]>(this.url+"/findByDni/"+dni, this.httpOPtions);
  }



}

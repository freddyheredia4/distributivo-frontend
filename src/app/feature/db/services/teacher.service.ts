import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(
    private http: HttpClient
  ) { }
  
  private HttpOptions = {
    headers: new HttpHeaders({
      "Content-Type":"application/json"
    })
  }

  private url : string = "http://localhost:8080/api/teacher";

  public findById(id : number): Observable<Teacher>{
    return this.http.get<Teacher>(this.url+"/findById/"+id, this.HttpOptions);
  }

  public findAll(): Observable<Teacher[]>{
    return this.http.get<Teacher[]>(this.url+"/findAll", this.HttpOptions);
  }

  public save (teacher : Teacher): Observable<Teacher>{
    return this.http.post<Teacher>(this.url+"/save", teacher, this.HttpOptions);
  }

  public deleteById (id : number) : Observable<Teacher>{
    return this.http.delete<Teacher>(this.url+"/deleteById/"+id, this.HttpOptions);
  }

  public findByName (term : string) : Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.url+"/findByName/"+term, this.HttpOptions);
  }

  downloadFile() {
    return this.http.get<Blob>(`${this.url}/export-to-excel`, 
    {
       observe: 'response', responseType: 'blob' as 'json'
    
    })
  }
/*
  addSuccess(title : string, message : string):void{
    this.ngxToastService.onSuccess(title,message)
  }

  addInfo(title : string, message : string):void{
    this.ngxToastService.onInfo(title,message)
  }

  addWarning(title:string, message : string):void{
    this.ngxToastService.onWarning(title,message)
  }

  addDanger(title : string, message : string):void{
    this.ngxToastService.onDanger(title,message)
  }
*/

}

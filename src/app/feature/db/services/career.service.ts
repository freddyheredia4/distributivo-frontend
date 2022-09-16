import { Injectable } from '@angular/core';
import { Career } from '../models/career';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  constructor(
    private http : HttpClient
  ) { }

  private httpOptions = {
    headers : new HttpHeaders({
      "Content-Type" : "application/json"
    })
  }

  private url : string = "http://localhost:8080/api/career";

  public findAll():Observable<Career[]>{
    return this.http.get<Career[]>(this.url+"/findAll", this.httpOptions)
  }
}

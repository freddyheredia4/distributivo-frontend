import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Distributive } from './models/distributive';

@Injectable({
  providedIn: 'root'
})
export class DistributiveService {

  constructor(
    private http : HttpClient
  ) { }

  private initialUrlDistributive = 'http://localhost:8080/api/distributive';
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'user': 'admin:123'
    }),
  };


  public searchByEmail(email : string) : Observable<Distributive[]>{
    return this.http.get<Distributive[]>(`${this.initialUrlDistributive}/findByEmail/${email}`, this.httpOptions);
  }
}
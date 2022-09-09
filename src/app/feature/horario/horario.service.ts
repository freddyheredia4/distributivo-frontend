import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class HorarioService {

  constructor(private http: HttpClient) {}

  getEvents() {
      return this.http.get('showcase/resources/data/calendarevents.json')
                  .toPromise()
                  // .then(res => <any[]> res.json().data)
                  .then(data => { return data; });
  }
}

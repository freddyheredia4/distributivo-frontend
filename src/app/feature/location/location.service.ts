import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from './models/location';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}
  private initialUrlLocation = 'http://localhost:8080/api/location';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'user': 'admin:123'
    }),
  };
  public getLocations = (): Observable<Location[]> => {
    return this.http.get<Location[]>(this.initialUrlLocation, this.httpOptions);
  };

  public getLocation = (id: string): Observable<Location> => {
    return this.http.get<Location>(
      `${this.initialUrlLocation}/${id}`,
      this.httpOptions
    );
  };

  public saveLocation = (newLocation: Location): Observable<Location> => {
    return this.http.post<Location>(
      this.initialUrlLocation,
      newLocation,
      this.httpOptions
    );
  };

  public updateLocation = (locationUpdate: Location): Observable<Location> => {
    return this.http.put<Location>(
      this.initialUrlLocation,
      locationUpdate,
      this.httpOptions
    );
  };

  public removeLocation(id: string) {
    return this.http.delete<any>(
      `${this.initialUrlLocation}/${id}`,
      this.httpOptions
    );
  }
}

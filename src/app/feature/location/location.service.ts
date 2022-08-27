import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from './models/location';
import { LocationDto } from './models/locationDto';
import { NgxToastService } from 'ngx-toast-notifier';
@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient,
    private ngxToastService : NgxToastService) {}
  private initialUrlLocation = 'http://localhost:8080/api/location';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'user': 'admin:123'
    }),
  };
  public getLocations = (): Observable<LocationDto> => {
    return this.http.get<LocationDto>(this.initialUrlLocation, this.httpOptions);
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
  
  downloadFile() {
    return this.http.get<Blob>(`${this.initialUrlLocation}/export-to-excel`, 
    {
       observe: 'response', responseType: 'blob' as 'json'
    
    })
  }

  submitExcel(){
    
  } 

  
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
}

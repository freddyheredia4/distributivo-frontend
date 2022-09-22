import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgxToastService } from 'ngx-toast-notifier';
import { Observable } from 'rxjs';
import { SaveEventDTO } from './models/saveEventDTO';
import { ScheduleEvents } from './models/scheduleData';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(
   private http : HttpClient,
   private route: ActivatedRoute,
   private router: Router,
   private ngxToastService : NgxToastService


  ) { }

  private reBool : boolean = true;

  private initialUrlSchedule = 'http://localhost:8080/api/schedule';
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'Schedule': 'admin:123'
    }),
  };


  public getSchedule(querys : string) : Observable<ScheduleEvents>{
    return this.http.get<ScheduleEvents>(`${this.initialUrlSchedule}${querys}`, this.httpOptions);

  }

  public save(event : SaveEventDTO) {
    return this.http.post(this.initialUrlSchedule, event, this.httpOptions)

  }

  public addQueryParam(params : Params){
    this.router.navigate(["/layout/schedule"], {
     relativeTo: this.route,
     queryParams: params,
     queryParamsHandling: 'merge',
    
   //  skipLocationChange: true
   
   });

   
}
public reload(){
  this.reBool = !this.reBool
  this.addQueryParam({r : this.reBool})
}


public deleteEvent(id : string) {
  return this.http.get(`${this.initialUrlSchedule}/delete/${id}`);
}

downloadFile() {
  return this.http.get<Blob>(`${this.initialUrlSchedule}/export-to-excel`, 
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

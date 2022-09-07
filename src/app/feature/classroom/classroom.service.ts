import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxToastService } from 'ngx-toast-notifier';
import { Observable } from 'rxjs';
import { ClassRoom } from './models/classroom';
import { ClassRoomDto } from './models/classroomDto';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  constructor(private http: HttpClient,
    private ngxToastService : NgxToastService,
    private router : Router
  ) {}

  public listClassrooms: ClassRoomDto ={ 
    capacity : 0,
    totalPages : 0,
    classrooms : [],
    page : 0,
    total : 0,
  }


  private initialUrlCLassroom = 'http://localhost:8080/api/classroom';
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'user': 'admin:123'
    }),
  };

  public getClassrooms = (page : string): Observable<ClassRoomDto> => {
    return this.http.get<ClassRoomDto>(`${this.initialUrlCLassroom}?page=${page}`, this.httpOptions);
  };

  public getCLassroomByName(name : string) : Observable<ClassRoom[]>{
    return this.http.get<ClassRoom[]>(`${this.initialUrlCLassroom}/find/${name}`,this.httpOptions);
  }

  public getCLassroom = (id: string): Observable<ClassRoom> => {
    return this.http.get<ClassRoom>(
      `${this.initialUrlCLassroom}/${id}`,
      this.httpOptions
    );
  };

  public saveCLassroom = (newCLassroom: ClassRoom): Observable<ClassRoom> => {
    return this.http.post<ClassRoom>(
      this.initialUrlCLassroom,
      newCLassroom,
      this.httpOptions
    );
  };

  public updateCLassroom = (cLassroomUpdate: ClassRoom): Observable<ClassRoom> => {
    return this.http.post<ClassRoom>(
      this.initialUrlCLassroom + '/update',
      cLassroomUpdate,
      this.httpOptions
    );
  };

  public findAllClassrooms() : Observable<ClassRoom[]> {
    return this.http.get<ClassRoom[]>(`${this.initialUrlCLassroom}/findAll`, this.httpOptions);

  }

  public removeCLassroom(id: string) {
    return this.http.get<any>(
      `${this.initialUrlCLassroom}/delete/${id}`,
      this.httpOptions
    );
  }
  
  downloadFile() {
    return this.http.get<Blob>(`${this.initialUrlCLassroom}/export-to-excel`, 
    {
       observe: 'response', responseType: 'blob' as 'json'
    
    })
  }

  reload(){
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['Your actualComponent']);
  }); 
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

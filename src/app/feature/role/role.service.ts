import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoleDto } from './models/roleDTO';
import { NgxToastService } from 'ngx-toast-notifier';
import { UserRole } from './models/userRole';
@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private http: HttpClient,
    private ngxToastService : NgxToastService
  ) {}

  public listRoles: RoleDto ={

    capacity : 0,
    totalPages : 0,
    roles : [],
    page : 0,
    total : 0

  }


  private initialUrlRole = 'http://localhost:8080/api/role';
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'Role': 'admin:123'
    }),
  };

  public getRoles = (page : string): Observable<RoleDto> => {
    return this.http.get<RoleDto>(`${this.initialUrlRole}?page=${page}`, this.httpOptions);
  };

  public findAllRoles(){
    return this.http.get<UserRole[]>(`${this.initialUrlRole}/findAll`)
  } 

  public getRoleByName(name : string) : Observable<UserRole[]>{
    return this.http.get<UserRole[]>(`${this.initialUrlRole}/find/${name}`,this.httpOptions);
  }

  public getRole = (id: string): Observable<UserRole> => {
    return this.http.get<UserRole>(
      `${this.initialUrlRole}/${id}`,
      this.httpOptions
    );
  };

  public saveRole = (newRole: UserRole): Observable<UserRole> => {
    return this.http.post<UserRole>(
      this.initialUrlRole,
      newRole,
      this.httpOptions
    );
  };

  public updateRole = (RoleUpdate: UserRole): Observable<UserRole> => {
    return this.http.put<UserRole>(
      this.initialUrlRole,
      RoleUpdate,
      this.httpOptions
    );
  };

  public removeRole(id: string) {
    return this.http.get<any>(
      `${this.initialUrlRole}/delete/${id}`,
      this.httpOptions
    );
  }
  
  downloadFile() {
    return this.http.get<Blob>(`${this.initialUrlRole}/export-to-excel`, 
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

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { UserDto } from './models/userDto';
import { NgxToastService } from 'ngx-toast-notifier';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient,
    private ngxToastService : NgxToastService
  ) {}

  public listUsers: UserDto ={

    capacity : 0,
    totalPages : 0,
    users : [],
    page : 0,
    total : 0

  }


  private initialUrlUser = 'http://localhost:8080/api/user';
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'user': 'admin:123'
    }),
  };

  public getUsers = (page : string): Observable<UserDto> => {
    return this.http.get<UserDto>(`${this.initialUrlUser}?page=${page}`, this.httpOptions);
  };

  public findAllUsers(){
    return this.http.get<User[]>(`${this.initialUrlUser}/findAll`)
  } 

  public getUserByName(name : string) : Observable<User[]>{
    return this.http.get<User[]>(`${this.initialUrlUser}/find/${name}`,this.httpOptions);
  }

  public getUser = (id: string): Observable<User> => {
    return this.http.get<User>(
      `${this.initialUrlUser}/${id}`,
      this.httpOptions
    );
  };

  public saveUser = (newUser: User): Observable<User> => {
    return this.http.post<User>(
      this.initialUrlUser,
      newUser,
      this.httpOptions
    );
  };

  public updateUser = (UserUpdate: User): Observable<User> => {
    return this.http.put<User>(
      this.initialUrlUser,
      UserUpdate,
      this.httpOptions
    );
  };

  public removeUser(id: string) {
    return this.http.get<any>(
      `${this.initialUrlUser}/delete/${id}`,
      this.httpOptions
    );
  }
  
  downloadFile() {
    return this.http.get<Blob>(`${this.initialUrlUser}/export-to-excel`, 
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

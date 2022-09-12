import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: []
})
export class UserListComponent implements OnInit {

  constructor(public userService : UserService,
    private route : ActivatedRoute

    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
    this.getUsers(params['page'] || '0');

    })
   
  }

  public currentId = '';

  private getUsers(page : string){
    this.userService.getUsers(page).subscribe(
      res => {
      this.userService.listUsers = res;
    },
      err =>{ console.error(err)
      this.userService.addDanger('Error', 'Error al traer todas las ubicaciones');
      }
      )
  }

  public delete(){
    this.userService.removeUser(this.currentId).subscribe( ()=>{
                  
      this.getUsers('0');
      this.userService.addSuccess('Success', 'Se elimino correctamente');

        });
          
      
     
  }
  public setCurrentId(id : string){
    this.currentId = id;
  }

  public removeCurrentId(){
    this.currentId = '';
  }

}

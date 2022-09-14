import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../models/user';
import { UserRole } from '../../role/models/userRole';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: []
})
export class ModalUserComponent implements OnChanges  {
   
  constructor( private UserService : UserService,
  private router : Router ) { }
  
  @Input() currentId = '';

  public currentEntity :User ={
    id : '',
    name : '',
    password : '',
    looked : false,
    username : '',
    roles: []
  } 
  ngOnChanges(changes: SimpleChanges) {
    if(!this.validateId()) this.findById();
  }

  private findById(){

    this.UserService.getUser(this.currentId).subscribe(
      (res)=>{
        this.currentEntity = res;
      },
      (err)=>{
        this.UserService.addDanger('Error', 'Error al buscar el usuario')
        console.error(err);
      }
    )

  }

 public addRoleUser (role : UserRole){
 
  const exist = this.currentEntity.roles.some(existRole => {
    return role.roleId == existRole.roleId
  });
  if(!exist) this.currentEntity.roles.push(role);
  


 }

  save() : any {
    if(!this.validate()){
     
      return this.UserService.saveUser(this.currentEntity).subscribe(
        (res)=>{
          this.UserService.addSuccess('Correcto', 'Se guardo correctamente la ubicacion');
          this.reload();
        },
        (err)=> this.UserService.addDanger('Error', 'Error al guardar la ubicacion')
        )
    }
    this.UserService.addDanger('Error', 'Algunos campos no cumplen con el estandar')

  }

  public deleteRole(id : string){
    this.currentEntity.roles = this.currentEntity.roles.filter(role => role.id != id)

  }

  removeCurrentEntity(){
    this.currentEntity = {
     
      password : '',
      id : '',
      name : '',
      looked : false,
      username : '',
      roles : []
    }

  }

  private reload(){
    this.router.navigateByUrl('/layout', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/layout/user/']);
  }); 
  }

  private validateId(){

    return (!this.currentId || this.currentId.length == 0 );

  }

  private validate(){
    return (
     //this.currentEntity.coordinates.length < 10 || 
     this.currentEntity.name.length < 4 ||
     this.currentEntity.username.length < 4,
     this.currentEntity.password.length < 10 
     )  
   }
}

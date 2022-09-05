import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ClassroomService } from '../classroom.service';
import { ClassRoom } from '../models/classroom';

@Component({
  selector: 'app-modal-classroom',
  templateUrl: './modal-classroom.component.html',
  styleUrls: []
})
export class ModalClassroomComponent implements OnChanges{
   
  constructor( private classroomService : ClassroomService,
    private router : Router ) { }

    @Input() currentId = '';
    ngOnChanges(changes: SimpleChanges) {
      if(!this.validateId()) this.findById();
    }

  
  public currentEntity :ClassRoom ={
    id : '',
    name : '',
    capacity : 0,
    location : null,
    type : '',
    locationName : null,
    typeName : null, 
    description : '' 
  } 

  private findById(){

    this.classroomService.getCLassroom(this.currentId).subscribe(
      (res)=>{
        this.currentEntity = res;
      },
      (err)=>{
        this.classroomService.addDanger('Error', 'Error al buscar el usuario')
        console.error(err);
      }
    )

  }

  public saveOrUpdate(){
    if(this.validateId()){
      this.save();
    }else{
      this.update();
    }
  }

  private save() : any {
    //if(!this.validate()){
     
      return this.classroomService.saveCLassroom(this.currentEntity).subscribe(
        (res)=>{
          this.classroomService.addSuccess('Correcto', 'Se guardo correctamente la ubicacion');
          this.reload();
        },
        (err)=> this.classroomService.addDanger('Error', 'Error al guardar la ubicacion')
        )
   // }
    //this.classroomService.addDanger('Error', 'Algunos campos no cumplen con el estandar')

  }

  private update(){
     return this.classroomService.updateCLassroom(this.currentEntity).subscribe(
      (res)=>{
        this.classroomService.addSuccess('Correcto', 'Se edito correctamente la ubicacion');
        this.reload();
      },
      (err)=> this.classroomService.addDanger('Error', 'Error al editar la ubicacion')
      )
 // }
  }

  removeCurrentEntity(){
    this.currentEntity = {
      id : '',
      name : '',
      capacity : 0,
      description : '',

      location : null,
      type : '',
      locationName : null,
      typeName : null
    }

  }

  public setType(id : string){
    this.currentEntity.type = id;

  }

  private reload(){
    this.router.navigateByUrl('/layout', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/layout/classroom/']);
  }); 
  }

  private validateId(){

    return (!this.currentId || this.currentId.length == 0 );

  }

  addLocation(value : string){
    this.currentEntity.location = parseInt(value);
  }

 /* private validate(){
    return (
     this.currentEntity.coordinates.length < 10 || 
     this.currentEntity.name.length < 4 ||
     this.currentEntity.description.length == 0 
     )  
    }
  */
}

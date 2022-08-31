import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassroomService } from '../classroom.service';
//import { ClassRoom } from '../models/classroom';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: []
})
export class ClassroomListComponent implements OnInit {

  constructor(public classRoomService : ClassroomService,
    private route : ActivatedRoute

    ) { }

    ngOnInit(): void {
      this.route.queryParams.subscribe(params =>{
      this.getclassRooms(params['page'] || '0');
  
      })
     
    }
  
    public currentId = '';
  
    private getclassRooms(page : string){
      this.classRoomService.getClassrooms(page).subscribe(
        res => {
        this.classRoomService.listClassrooms = res;
      },
        err =>{ console.error(err)
        this.classRoomService.addDanger('Error', 'Error al traer todas las ubicaciones');
        }
        )
    }
  
    public delete(){
      this.classRoomService.removeCLassroom(this.currentId).subscribe(
        ()=>{
                  
          this.getclassRooms('0');
          this.classRoomService.addSuccess('Success', 'Se elimino correctamente');

        }
      );
    
       
    }
    public setCurrentId(id : string){
      this.currentId = id;
    }
  
    public removeCurrentId(){
      this.currentId = '';
    }
  
}

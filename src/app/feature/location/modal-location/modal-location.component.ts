import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../location.service';
import { Location } from '../models/location';

@Component({
  selector: 'app-modal-location',
  templateUrl: './modal-location.component.html',
  styleUrls: []
})
export class ModalLocationComponent implements OnChanges  {
   
  constructor( private locationService : LocationService,
  private router : Router ) { }
  
  @Input() currentId = '';

  public currentEntity :Location ={
    id : '',
    name : '',
    latitude : 0,
    longitude : 0,
    description : '',
    status : true
  } 
  ngOnChanges(changes: SimpleChanges) {
    if(!this.validateId()) this.findById();
  }

  private findById(){

    this.locationService.getLocation(this.currentId).subscribe(
      (res)=>{
        this.currentEntity = res;
      },
      (err)=>{
        this.locationService.addDanger('Error', 'Error al buscar el usuario')
        console.error(err);
      }
    )

  }

  save() : any {
    if(!this.validate()){
     
      return this.locationService.saveLocation(this.currentEntity).subscribe(
        (res)=>{
          this.locationService.addSuccess('Correcto', 'Se guardo correctamente la ubicacion');
          this.reload();
        },
        (err)=> this.locationService.addDanger('Error', 'Error al guardar la ubicacion')
        )
    }
    this.locationService.addDanger('Error', 'Algunos campos no cumplen con el estandar')

  }

  removeCurrentEntity(){
    this.currentEntity = {
      latitude : 0,
      longitude : 0,
      description : '',
      id : '',
      name : '',
      status : true
    }

  }

  private reload(){
    this.router.navigateByUrl('/layout', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/layout/location/']);
  }); 
  }

  private validateId(){

    return (!this.currentId || this.currentId.length == 0 );

  }

  private validate(){
    return (
     //this.currentEntity.coordinates.length < 10 || 
     this.currentEntity.name.length < 4 ||
     this.currentEntity.description.length == 0 
     )  
   }
}

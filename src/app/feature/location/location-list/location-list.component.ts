import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { Location } from '../models/location';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: []
})
export class LocationListComponent implements OnInit {
  
  public locations : Location[] = [];
  public currentId : string = '';

  constructor(private locationService : LocationService,

    ) { }

  ngOnInit(): void {
    this.getLocations();
  }

  private getLocations(){
    this.locationService.getLocations().subscribe(
      res => {
      this.locations = res.locations;
    },
      err =>{ console.error(err)
      this.locationService.addDanger('Error', 'Error al traer todas las ubicaciones');
      }
      )
  }

  public delete(){
    this.locationService.removeLocation(this.currentId).subscribe(
      (res)=>{
        this.getLocations();
        this.locationService.addSuccess('Success', 'Se elimino correctamente');
      },
      (err)=>{
        this.locationService.addDanger('Error', 'Error al eliminar la ubicacion');
        console.error(err)
      }
    )
  }
  public setCurrentId(id : string){
    this.currentId = id;
  }

  public removeCurrentId(){
     this.currentId = '';
  }

}

import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { Location } from '../models/location';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: []
})
export class LocationListComponent implements OnInit {
  
  public locations : Location[] = [];
  public currentId : string = '';

  constructor(private locationService : LocationService,
    private toast : NgToastService
    ) { }

  ngOnInit(): void {
    this.getLocations();
  }

  private getLocations(){
    this.locationService.getLocations().subscribe(
      res => {
      console.log(res);
     
      this.locations = res.locations
    },
      err => console.error(err)
    )
  }

  public delete(){
    this.locationService.removeLocation(this.currentId).subscribe(
      (res)=>{
        this.getLocations();
        this.showSuccess('Success', 'Se elimino correctamente');
      },
      (err)=>{
        this.showError('Error', 'Error al eliminar la ubicacion');
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

    
  private showSuccess(title : string, summary : string){
    this.toast.success({ detail : title ,type :'', summary : summary, duration : 5000,
    position : ''
  })

  }
  
  private showError(title : string, summary : string){
    this.toast.error({ detail : title, summary : summary, duration : 5000 })

  }
}

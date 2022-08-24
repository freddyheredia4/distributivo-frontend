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

  constructor(private locationService : LocationService) { }

  ngOnInit(): void {
    this.getLocations();
  }

  private getLocations(){
    this.locationService.getLocations().subscribe(
      res => {
      console.log(res);
      this.locations = res},
      err => console.error(err)
    )
  }

  public delete(){
    this.locationService.removeLocation(this.currentId).subscribe(
      (res)=>{
        console.log(res);
        this.getLocations();
      },
      (err)=>{
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

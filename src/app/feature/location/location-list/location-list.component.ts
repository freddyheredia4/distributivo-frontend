import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: []
})
export class LocationListComponent implements OnInit {

  constructor(public locationService : LocationService,
    private route : ActivatedRoute,
    private snackbar : MatSnackBar

    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
    this.getLocations(params['page'] || '0');

    })
   
  }

  public currentId = '';

  private getLocations(page : string){
    this.locationService.getLocations(page).subscribe(
      res => {
      this.locationService.listLocations = res;
    },
      () => this.snackbar.open('Hubo un error al guardar el curso ❌')
      
      )
  }

  public delete(){
    this.locationService.removeLocation(this.currentId).subscribe( ()=>{
                  
      this.getLocations('0');
      this.snackbar.open("Se ha importado correctamente ​✅​");

        });
          
      
     
  }
  public setCurrentId(id : string){
    this.currentId = id;
  }

  public removeCurrentId(){
    this.currentId = '';
  }

}

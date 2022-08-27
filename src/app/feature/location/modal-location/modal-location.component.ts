import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../location.service';
import { Location } from '../models/location';

@Component({
  selector: 'app-modal-location',
  templateUrl: './modal-location.component.html',
  styleUrls: []
})
export class ModalLocationComponent implements OnInit {

  constructor( private locationService : LocationService,
    private router : Router,
    private activatedRoute : ActivatedRoute ) { }
  
  public currentEntity :Location ={
    id : '',
    name : '',
    coordinates : '',
    description : ''
  } 

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (params.get("id")){
          this.findById(params.get("id")!);
        }
      }
    )

  }

  private findById(id : string){

    this.locationService.getLocation(id).subscribe(
      (res)=>{
        this.currentEntity = res;
      },
      (err)=>{
        console.error(err);
      }
    )

  }

  save() : void {
    this.router.navigateByUrl('/layout', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/layout/location/']);
  }); 
    this.locationService.saveLocation(this.currentEntity).subscribe(
      (res)=>{
        console.table(res)
      },
      (err)=> console.error(err)
      )
  }
  removeCurrentEntity(){
    this.currentEntity = {
      coordinates : '',
      description : '',
      id : '',
      name : ''
    }

  }
}

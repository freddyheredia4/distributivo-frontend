import { Component, OnInit } from '@angular/core';
import { Career } from '../../db/models/career';
import { CareerService } from '../../db/services/career.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-career-modal',
  templateUrl: './career-modal.component.html'
})
export class CareerModalComponent implements OnInit {

  constructor(
    private careerService: CareerService,
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(
      (params) => {
        if(params.get("id")){
          this.findById(parseInt(params.get("id")!))
        }
      }
    )
  }

  currentEntity: Career = {
    id: 0,
    name: "",
    duration: 0,
    img: "",
    status: true


  }

  public save(): void {
    this.careerService.save(this.currentEntity).subscribe(
      () => {
        this.currentEntity = {
          id: 0,
          name: "",
          duration: 0,
          img: '',
          status: true
        }
      }
    )
    this.router.navigate(["/layout/career"]);
  }

  public findById(id : number ):void{
    this.careerService.findById(id).subscribe(
      (response) => this.currentEntity = response
    )
  }

}

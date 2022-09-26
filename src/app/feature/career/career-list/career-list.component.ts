import { Component, OnInit } from '@angular/core';
import { Career } from '../../db/models/career';
import { CareerService } from '../../db/services/career.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-career-list',
  templateUrl: './career-list.component.html'
})
export class CareerListComponent implements OnInit {

  constructor(
    private careerService: CareerService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.findAll();
    this.activateRoute.paramMap.subscribe(
      (params) => {
        if(params.get("id")){
          this.findById(parseInt(params.get("id")!))
        }
      }
    )
  }

  public careerList: Career[] = []

  public findAll(): void {
    this.careerService.findAll().subscribe(
      (response) => this.careerList = response
    )
  }

  public findByName(term: string): void {
    if (term.length >= 2) {
      this.careerService.findByName(term).subscribe(
        (response) => this.careerList = response
      )
    }
    if (term.length === 0) {
      this.findAll();
    }
  }

  currentEntity : Career = {
    id : 0,
    name : "",
    duration : 0,
    img : "",
    status : true
  }

  public findById( id : number ):void{
    this.careerService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response
      }
    )
  }

}


import { Component, OnInit } from '@angular/core';
import { SchoolPeriod } from '../../db/models/schoolPeriod';
import { SchoolPeriodService } from '../../db/services/school-period.service';
import { CareerService } from '../../db/services/career.service';
import { Career } from '../../db/models/career';

@Component({
  selector: 'app-distibutivo-docente-combobox',
  templateUrl: './distibutivo-docente-combobox.component.html'
})
export class DistibutivoDocenteComboboxComponent implements OnInit {

  constructor(
    private schoolPeriodService : SchoolPeriodService,
    private carrerService : CareerService
  ) { }

  ngOnInit(): void {
    this.findAll();
    this.findAllCareer();
  }

  schoolPeriodList : SchoolPeriod[] = [];
  careerList : Career[] = [];

  public findAll() :void {
    this.schoolPeriodService.findAll().subscribe(
      (response) => this.schoolPeriodList = response
    )
  }

  public findAllCareer() : void{
    this.carrerService.findAll().subscribe(
      (response) => this.careerList = response
    )
  }

}

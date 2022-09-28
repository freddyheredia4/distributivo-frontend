import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GradeService } from '../../../feature/grade/grade.service';
import { Career } from '../../../feature/grade/models/career';

@Component({
  selector: 'app-combobox-career',
  templateUrl: './combobox-career.component.html',
  styleUrls: []
})
export class ComboboxCareerComponent implements OnInit {

  constructor(
    private gradeService : GradeService,
  ) { }

  @Output() careerSelectEvent  = new EventEmitter<string>()
  @Input() careerId : string =  '';
  @Input() myClass = '';
   
  public careers : Career[] = [];
  ngOnInit(): void {
    this.getCareers();
  }

  getCareers(){
    this.gradeService.getCareers().subscribe(
      (res)=>this.careers= res
    )

  }

  addCareerEmittier(id : string){
    
    this.careerSelectEvent.emit(id);

  }

}

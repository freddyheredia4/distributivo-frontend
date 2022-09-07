import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GradeService } from '../grade.service';
import { Grade } from '../models/grade';

@Component({
  selector: 'app-grade-combobox',
  templateUrl: './grade-combobox.component.html',
  styleUrls: []
})
export class GradeComboboxComponent implements OnInit {
  
  constructor(
    private gradeService : GradeService
  ) { }
  @Output() changeGradeEmittier = new EventEmitter<string>()
  public grades : Grade[] = []; 
  

  ngOnInit(): void {
    this.getGrades();
  }

  handleChangeGrade(id : string){
    this.changeGradeEmittier.emit(id);

  }

  getGrades(){
    this.gradeService.findAllGrades().subscribe(
      (res)=> {
        this.grades = res}
    )
    

  }

}

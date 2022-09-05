import { Component, Input, OnInit } from '@angular/core';
import { GradeService } from '../grade.service';
import { Grade } from '../models/grade';

@Component({
  selector: 'app-card-grade',
  templateUrl: './card-grade.component.html',
  styleUrls: []
})
export class CardGradeComponent implements OnInit {
  
  @Input() grade : Grade= {
    career : '',
    careerName : '',
    id : '',
    level : null,
    name : '',
    parallel : null,
    status : true,
    workingDay : null
    
  };

  constructor(
    private gradeService : GradeService
  ) { }

  ngOnInit(): void {
  }

  delete(id : string){
    this.gradeService.removeGrade(id).subscribe((

    )=>this.gradeService.reload())
  }

  

}

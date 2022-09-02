import { Component, OnInit } from '@angular/core';
import { GradeService } from '../grade.service';
import { Grade } from '../models/grade';

@Component({
  selector: 'app-toolbar-grade',
  templateUrl: './toolbar-grade.component.html',
  styleUrls: []
})
export class ToolbarGradeComponent implements OnInit {

  constructor(
    private gradeService : GradeService
  ) { }

  
  ngOnInit(): void {
    
  }

  handleClickSearch(value : string){
    this.gradeService.getGradeByName(value).subscribe(
      (data)=>{
        this.setListGrades(data);
      }
      
)

  }
  public setListGrades(grade : Grade[]){
    this.gradeService.listGrades = {
      capacity : 0,
      totalPages : 0,
      total : 0, 
      page : 0 ,
      grades : grade
    }

  }
  

}

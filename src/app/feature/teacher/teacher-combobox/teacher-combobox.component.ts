import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Teacher } from '../models/teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-combobox',
  templateUrl: './teacher-combobox.component.html',
  styleUrls: []
})
export class TeacherComboboxComponent implements OnInit {
  
  @Output() emittierTeacher = new EventEmitter<string>()

  constructor(
    private teacherService : TeacherService
  ) { }
   
  public teachers : Teacher[] = [];

  ngOnInit(): void {
  this.getTeachers()
  }

  private getTeachers(){
   this.teacherService.getAllTeacher().subscribe(
    (res)=> this.teachers = res
   )
  }
  public handlerChangeTeacher(id : string){
    this.emittierTeacher.emit(id);
  }

}

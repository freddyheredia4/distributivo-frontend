import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html'
})
export class TeacherListComponent implements OnInit {

  constructor(
    private teacherSerice : TeacherService
  ) { }

    teacherList: Teacher[]=[];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void {
    this.teacherSerice.findAll().subscribe(
      (response) => this.teacherList = response
    )
  }

}

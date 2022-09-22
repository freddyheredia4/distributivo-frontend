import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../db/services/teacher.service';
import { Teacher } from '../../db/models/teacher';

@Component({
  selector: 'app-distibutivo-docente-list',
  templateUrl: './distibutivo-docente-list.component.html'
})
export class DistibutivoDocenteListComponent implements OnInit {

  constructor(
    private teacherService :  TeacherService
  ) { 
  }

  ngOnInit(): void {
    this.findAll();
  }

  currentEntity : Teacher = {
    id: 0,
    dni: '',
    name: '',
    lastname: '',
    color: '',
    email: '',
    archived: true,
    grade: [],
    subject: [],
    schoolPeriod: []
  }

  teacherList : Teacher[] = [];

  public findAll() :void {
    this.teacherService.findAll().subscribe(
      (response) => this.teacherList = response
    )
  }

  public findById(id : number): void {
    this.teacherService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

}

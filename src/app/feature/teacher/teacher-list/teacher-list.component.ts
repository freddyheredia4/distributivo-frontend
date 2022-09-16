import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from '../../db/models/teacher';
import { TeacherService } from '../../db/services/teacher.service';
import { SubjectService } from '../../db/services/subject.service';
import { GradeService } from '../../db/services/grade.service';
import { SchoolPeriodService } from '../../db/services/school-period.service';



@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html'
})
export class TeacherListComponent implements OnInit {

  constructor(
    private teacherService: TeacherService,
    private router: Router,
    private activatedRoute : ActivatedRoute,
    private subjectService : SubjectService,

  ) { }

  teacherList: Teacher[] = [];

  ngOnInit(): void {
    this.findAll();
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if(params.get("id")){
          this.findById(parseInt(params.get("id")!))
        }
      }
    )
  }

  currentEntity : Teacher = {
    id : 0,
    name : "",
    lastname : "",
    dni : "",
    color : "",
    email : "",
    archived :false,
    grade: [],
    subject: [],
    schoolPeriod : []
  };

  public findAll(): void {
    this.teacherService.findAll().subscribe(
      (response) => this.teacherList = response
    )
  }

  public findByName(term: string): void {
    if (term.length >= 2) {
      this.teacherService.findByName(term).subscribe(
        (res) => this.teacherList = res
      )
    }
    if (term.length === 0 ){
      this.findAll()
    }
  }

  public findById(id : number ) : void {
    this.teacherService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
        this.currentEntity.subject.forEach(
          (subject) => {
            this.subjectService.findById(subject.id).subscribe(
              (item) => subject.name = item.name 
            )
          }
        )
      }
    )
  }
}




import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../db/services/teacher.service';
import { ActivatedRoute } from '@angular/router';
import { TeacherDto } from '../../db/models/teacherDto';
import { TeacherDtoService } from '../../db/services/teacher-dto.service';

@Component({
  selector: 'app-distibutivo-docente-form',
  templateUrl: './distibutivo-docente-form.component.html'
})
export class DistibutivoDocenteFormComponent implements OnInit {

  constructor(
    private teacherService: TeacherService,
    private activateRouter: ActivatedRoute,
    private teacherDtoService: TeacherDtoService
  ) { }

  ngOnInit(): void {
    this.findAll();
    this.activateRouter.paramMap.subscribe(
      (params) => {
        if (params.get('id')) {
          this.findByTeacherId(parseInt(params.get('id')!));
        }
      }
    )
  }

  currentEntity: TeacherDto = {
    teacher : 0,
    dniTeacher : "",
    nameTeacher : "",
    lastnameTeacher : "",
    course : 0,
    codeCourse : "",
    nameCourse : "",
    laboratoryHours : "",
    theoreticalHours : "",
    grade : 0,
    nameGrade : "",
    schoolTime :0,
    nameSchoolTime : "",
    startDate : new Date(),
    endDate : new Date()
  }

  teacherList: TeacherDto[] = []

  public findAll(): void {
    this.teacherDtoService.findAll().subscribe(
      (response) => this.teacherList = response
    )
  }

  public findByTeacherId( id : number ):void{
    this.teacherDtoService.findByTeacherId(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }
}
  // findById(id: number): void {
  //   this.teacherService.findById(id).subscribe(
  //     (response) => {
  //       this.currentEntity = response;
  //       console.log(response);
  //       this.currentEntity.grade.forEach(
  //         (grd) => {
  //           this.gradeService.findById(grd.id).subscribe(
  //             (item) => grd.working_day = item.working_day
  //           )
  //         }
  //       )
  //     }
  //   );
  // }


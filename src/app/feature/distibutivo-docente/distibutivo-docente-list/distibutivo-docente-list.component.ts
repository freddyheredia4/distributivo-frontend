import { Component, OnInit } from '@angular/core';
import { TeacherDtoService } from '../../db/services/teacher-dto.service';
import { TeacherDto } from '../../db/models/teacherDto';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-distibutivo-docente-list',
  templateUrl: './distibutivo-docente-list.component.html'
})
export class DistibutivoDocenteListComponent implements OnInit {

  constructor(
    private teacherDtoService: TeacherDtoService,
    private activatedRoute: ActivatedRoute
  ) { }

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

  public teacherDtoList: TeacherDto[] = []

  public findAll(): void {
    this.teacherDtoService.findAll().subscribe(
      (response) => this.teacherDtoList = response
    )
  }

  curremtEntity : TeacherDto = {
    id : 0,
    teacher : "",
    teacherApellido : "",
    teacherCedula : "",
    grade : "",
    period : "",
    subject : ""
  }

  public findById(id : number): void{
    this.teacherDtoService.findByTeacherId(id).subscribe(
      (response) => this.curremtEntity = response
    )
  }

  public findByDni(dni: string): void {
    if (dni.length >= 2) {
      this.teacherDtoService.findByDni(dni).subscribe(
        (response) => this.teacherDtoList = response
      )
    }
    if (dni.length === 0) {
      this.findAll()
    }
  }

}

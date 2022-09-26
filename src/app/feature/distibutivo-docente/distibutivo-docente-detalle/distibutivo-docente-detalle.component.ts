import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherDto } from '../../db/models/teacherDto'; 
import { TeacherDtoService } from '../../db/services/teacher-dto.service';

@Component({
  selector: 'app-distibutivo-docente-detalle',
  templateUrl: './distibutivo-docente-detalle.component.html'
})
export class DistibutivoDocenteDetalleComponent implements OnInit {

  constructor(
    private teacherDtoService: TeacherDtoService,
    private activateRoute : ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.findAll();
    this.activateRoute.paramMap.subscribe(
      (params)=>{
        if(params.get("id")){
          this.findByIdTeacher(parseInt(params.get("id")!))
        }
      }
    )
  }

  teacherDtoList : TeacherDto[] = [];

  public findAll():void{
    this.teacherDtoService.findAll().subscribe(
      (response) => this.teacherDtoList = response
    )
  }

  currentEntity : TeacherDto = {
    id: 0,
    teacherCedula: '',
    teacher: '',
    teacherApellido: '',
    grade: '',
    subject: '',
    period: ''
  }

  public findByIdTeacher(id : number):void{
    this.teacherDtoService.findByTeacherId(id).subscribe(
      (response) => {
        this.currentEntity = response
      }
    )
  }

}

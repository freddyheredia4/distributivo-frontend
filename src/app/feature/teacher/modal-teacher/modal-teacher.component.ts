import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Teacher } from '../../db/models/teacher';
import { TeacherService } from '../../db/services/teacher.service';

@Component({
  selector: 'app-modal-teacher',
  templateUrl: './modal-teacher.component.html'
})
export class ModalTeacherComponent implements OnInit {

  constructor(
    private teacherService: TeacherService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  currentEntity: Teacher = {
    id: 0,
    name: '',
    lastname: '',
    dni: '',
    email: '',
    color: '',
    archived: true,
    grade: [],
    subject : [],
    schoolPeriod : []
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (params.get("id")) {
          this.findById(parseInt(params.get("id")!))
        }
      }
    )
  }

  findById(id: number): void {
    this.teacherService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

  save(): void {
    this.teacherService.save(this.currentEntity).subscribe(
      () => {
        this.currentEntity = {
          id: 0,
          name: "",
          lastname: "",
          dni: "",
          color: "",
          email: "",
          archived: true,
          grade : [],
          subject : [],
          schoolPeriod : []
        };
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Peticion exitosa',
          showConfirmButton: false,
          timer: 2000
        });
        this.router.navigate(["/layout/teacher-list"]);
      }
    )
  }
  cancelar(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Peticion Cancelada',
      showConfirmButton: false,
      timer: 2000
    });
  }

}

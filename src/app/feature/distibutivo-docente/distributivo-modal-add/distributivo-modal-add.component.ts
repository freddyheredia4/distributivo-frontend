import { Component, OnInit } from '@angular/core';
import { Distributive } from '../../db/models/distributive';
import { TeacherDtoService } from '../../db/services/teacher-dto.service';

@Component({
  selector: 'app-distributivo-modal-add',
  templateUrl: './distributivo-modal-add.component.html'
})
export class DistributivoModalAddComponent implements OnInit {

  constructor(
    private teacherDtoService: TeacherDtoService
  ) { }

  ngOnInit(): void {
  }

  currentEntity: Distributive = {
    id: 0,
    schoolTime: 0,
    teacher: 0,
    course: 0,
    grade: 0,
    career: 0
  }

  public save(): void {
    this.teacherDtoService.save(this.currentEntity).subscribe(
      () => {
        this.currentEntity = {
          id: 0,
          schoolTime: 0,
          teacher: 0,
          course: 0,
          grade: 0,
          career: 0
        }
      }
    )
  }
}

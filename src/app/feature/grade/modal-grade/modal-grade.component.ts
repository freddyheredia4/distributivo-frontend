import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GradeService } from '../grade.service';
import { Grade } from '../models/grade';

@Component({
  selector: 'app-modal-grade',
  templateUrl: './modal-grade.component.html',
  styleUrls: [],
})
export class ModalGradeComponent implements OnInit {
  constructor(
    private gradeService: GradeService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.currentId = params['g'] || '';

      if (!this.validateId()) this.findById();
    });
  }

  currentId = '';
  ngOnChanges(changes: SimpleChanges) {}

  public currentEntity: Grade = this.getClearGrade();

  private findById() {
    this.gradeService.getGrade(this.currentId).subscribe(
      (res) => {
        this.currentEntity = res;
      },
      (err) => {
        this.gradeService.addDanger('Error', 'Error al buscar el usuario');
        console.error(err);
      }
    );
  }

  public saveOrUpdate() {
    if (this.validate())
      return this.gradeService.addDanger(
        'Error',
        'Algunos campos no cumplen con el estandar'
      );
    if (this.validateId()) return this.save();
    this.update();
  }

  private save(): any {
    //if(!this.validate()){

    return this.gradeService.saveGrade(this.currentEntity).subscribe(
      (res) => {
        this.gradeService.addSuccess(
          'Correcto',
          'Se guardo correctamente la ubicacion'
        );
        this.gradeService.reload();
      },
      (err) =>
        this.gradeService.addDanger('Error', 'Error al guardar la ubicacion')
    );
    // }
    //this.gradeService.addDanger('Error', 'Algunos campos no cumplen con el estandar')
  }

  private update() {
    return this.gradeService.updateGrade(this.currentEntity).subscribe(
      () => {
        this.gradeService.addSuccess(
          'Correcto',
          'Se edito correctamente la ubicacion'
        );
        this.gradeService.reload();
      },
      (err) =>
        this.gradeService.addDanger('Error', 'Error al editar la ubicacion')
    );
    // }
  }

  getClearGrade() {
    return {
      id: '',
      name: '',
      careerName: '',
      level: null,
      parallel: null,
      status: true,
      workingDay: null,
      career: '',
    };
  }
  removeCurrentEntity() {
    this.currentEntity = this.getClearGrade();
  }

  private validateId() {
    return !this.currentId || this.currentId.length == 0;
  }

  addCareer(value: string) {
    this.currentEntity.career = value;
  }

  private validate() {
    return (
      //this.currentEntity.coordinates.length < 10 ||
      this.currentEntity.name.length < 4 //||
      //this.currentEntity.description.length == 0
    );
  }
}

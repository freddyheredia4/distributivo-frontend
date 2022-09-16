import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatureRoutingModule } from './feature-routing.module';
import { PersonFormComponent } from './person/form/person.form.component';
import { FormsModule } from '@angular/forms';
import { PersonListComponent } from './person/list/person-list.component';
import { PersonToolbarComponent } from './person/toolbar/person-toolbar.component';
import { CityComboboxComponent } from './city/city-combobox.component';
import { AuthoritySearchComponent } from './authority/authority-search/authority-search.component';
import { LocationComponent } from './location/location.component';
import { ToolbarLocationComponent } from './location/toolbar-location/toolbar-location.component';
import { LocationListComponent } from './location/location-list/location-list.component';
import { ToolbarTeacherComponent } from './teacher/toolbar-teacher/toolbar-teacher.component';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ModalLocationComponent } from './location/modal-location/modal-location.component';
import { ModalTeacherComponent } from './teacher/modal-teacher/modal-teacher.component';
import { PaginationLocationComponent } from './location/pagination-location/pagination-location.component';
import { UploadModalLocationComponent } from './location/upload-modal-location/upload-modal-location.component';
import { UploadModalTeacherComponent } from './teacher/upload-modal-teacher/upload-modal-teacher.component';
import { TeacherPaginationComponent } from './teacher/teacher-pagination/teacher-pagination.component';
import { CareerComponent } from './career/career.component';
import { CareerModalComponent } from './career/career-modal/career-modal.component';
import { DistributivoDocenteComponent } from './distributivo-docente/distributivo-docente.component';
import { DistibutivoDocenteListComponent } from './distributivo-docente/distibutivo-docente-list/distibutivo-docente-list.component';
import { DistibutivoDocenteToolbarComponent } from './distributivo-docente/distibutivo-docente-toolbar/distibutivo-docente-toolbar.component';
import { DistibutivoDocentePaginationComponent } from './distributivo-docente/distibutivo-docente-pagination/distibutivo-docente-pagination.component';
import { DistibutivoDocenteFormComponent } from './distributivo-docente/distibutivo-docente-form/distibutivo-docente-form.component';
import { DistibutivoDocenteGenerateComponent } from './distributivo-docente/distibutivo-docente-generate/distibutivo-docente-generate.component';
import { DistibutivoDocenteComboboxComponent } from './distributivo-docente/distibutivo-docente-combobox/distibutivo-docente-combobox.component';


@NgModule({
  declarations: [
    PersonFormComponent,
    PersonListComponent,
    PersonToolbarComponent,
    CityComboboxComponent,
    AuthoritySearchComponent,
    LocationComponent,
    ToolbarLocationComponent,
    LocationListComponent,
    ToolbarTeacherComponent,
    TeacherListComponent,
    TeacherComponent,
    ModalLocationComponent,
    PaginationLocationComponent,
    UploadModalLocationComponent,
    UploadModalTeacherComponent,
    ModalTeacherComponent,
    TeacherPaginationComponent,
    CareerComponent,
    CareerModalComponent,
    DistributivoDocenteComponent,
    DistibutivoDocenteListComponent,
    DistibutivoDocenteToolbarComponent,
    DistibutivoDocentePaginationComponent,
    DistibutivoDocenteFormComponent,
    DistibutivoDocenteGenerateComponent,
    DistibutivoDocenteComboboxComponent,
    ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    
  ]
})
export class FeatureModule { }

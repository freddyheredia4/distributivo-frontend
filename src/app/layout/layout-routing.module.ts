import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from '../feature/location/location.component';
import { PersonFormComponent } from '../feature/person/form/person.form.component';
import { PersonListComponent } from '../feature/person/list/person-list.component';
import { TeacherComponent } from '../feature/teacher/teacher.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeacherListComponent } from '../feature/teacher/teacher-list/teacher-list.component';
import { CareerComponent } from '../feature/career/career.component';
import { DistributivoDocenteComponent } from '../feature/distributivo-docente/distributivo-docente.component';
import { DistibutivoDocenteFormComponent } from '../feature/distributivo-docente/distibutivo-docente-form/distibutivo-docente-form.component';
const routes: Routes = [
  {path: '', component:MainComponent ,
    children: [
      {path: '', component:DashboardComponent},
      {path: 'person-form', component:PersonFormComponent},
      {path: 'person-form/:id', component:PersonFormComponent},
      {path: 'person-list', component:PersonListComponent},
      {path: 'dashboard', component:DashboardComponent},
      {path: 'location', component: LocationComponent  },
      {path: 'location/:id', component : LocationComponent},
      {path: 'teacher', component: TeacherComponent},
      {path: 'teacher-list', component: TeacherListComponent},
      {path: 'teacher/:id', component: TeacherComponent},
      {path: 'career', component: CareerComponent },
      {path: 'distributivo-docente', component: DistributivoDocenteComponent},
      {path: 'distributivoForm', component: DistibutivoDocenteFormComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

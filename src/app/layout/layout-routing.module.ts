import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from '../feature/location/location.component';
import { PersonFormComponent } from '../feature/person/form/person.form.component';
import { PersonListComponent } from '../feature/person/list/person-list.component';
import { TeacherComponent } from '../feature/teacher/teacher.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {path: '', component:MainComponent ,
    children: [
      {path: '', component:DashboardComponent},
      {path: 'person-form', component:PersonFormComponent},
      {path: 'person-form/:id', component:PersonFormComponent},
      {path: 'person-list', component:PersonListComponent},
      {path: 'dashboard', component:DashboardComponent},
      {path: 'location', component: LocationComponent  },
      {path: 'teacher', component: TeacherComponent},
      {path: 'location/:id', component : LocationComponent},
      {path: 'teacher/:id', component: TeacherComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

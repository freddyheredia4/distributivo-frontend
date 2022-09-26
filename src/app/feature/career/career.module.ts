import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CareerComponent } from './career.component';
import { CareerModalComponent } from './career-modal/career-modal.component';
import { CareerListComponent } from './career-list/career-list.component';
import { CareerPaginationComponent } from './career-pagination/career-pagination.component';
import { CareerToolbarComponent } from './career-toolbar/career-toolbar.component';
import { FormsModule } from '@angular/forms';

const routes : Route[] = [
  { path: '', component: CareerListComponent },
  { path: ':id', component: CareerListComponent },
  
]

@NgModule({
  declarations: [
    CareerComponent,
    CareerModalComponent,
    CareerListComponent,
    CareerPaginationComponent,
    CareerToolbarComponent
  ],
  imports: [RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ]
})
export class CareerModule { }

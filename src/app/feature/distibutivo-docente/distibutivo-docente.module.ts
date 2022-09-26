import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistibutivoDocenteListComponent } from './distibutivo-docente-list/distibutivo-docente-list.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DistibutivoDocenteComponent } from './distibutivo-docente.component';
import { DistibutivoDocentePaginationComponent } from './distibutivo-docente-pagination/distibutivo-docente-pagination.component';
import { DistibutivoDocenteToolbarComponent } from './distibutivo-docente-toolbar/distibutivo-docente-toolbar.component';
import { DistibutivoDocenteGenerateComponent } from './distibutivo-docente-generate/distibutivo-docente-generate.component';
import { DistibutivoDocenteComboboxComponent } from './distibutivo-docente-combobox/distibutivo-docente-combobox.component';
import { DistibutivoDocenteDetalleComponent } from './distibutivo-docente-detalle/distibutivo-docente-detalle.component';

const routes : Route[] = [
  
  { path: '', component : DistibutivoDocenteListComponent},
  { path: ':id', component: DistibutivoDocenteListComponent },
  { path: 'distibutivo-detalle', component: DistibutivoDocenteDetalleComponent },
  { path: 'distibutivo-detalle:id', component: DistibutivoDocenteDetalleComponent }
]

@NgModule({
  declarations: [
    DistibutivoDocenteComponent,
    DistibutivoDocenteListComponent,
    DistibutivoDocentePaginationComponent,
    DistibutivoDocenteToolbarComponent,
    DistibutivoDocenteGenerateComponent,
    DistibutivoDocenteComboboxComponent,
    DistibutivoDocenteDetalleComponent
  ],
  imports: [RouterModule.forChild(routes),
    CommonModule,
    FormsModule

  ],
  providers: [],
  exports: []
})
export class DistibutivoDocenteModule { }

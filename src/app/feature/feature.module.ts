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
import { ModalLocationComponent } from './location/modal-location/modal-location.component';
import { PaginationLocationComponent } from './location/pagination-location/pagination-location.component';

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
    ModalLocationComponent,
    PaginationLocationComponent,
   
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }

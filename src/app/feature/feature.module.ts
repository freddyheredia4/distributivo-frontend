import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { LocationModalComponent } from './location/location-modal/location-modal.component';

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
    LocationModalComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ContactsRoutingModule} from './facility-routing.module';
import {FacilitySearchComponent} from './facility-search/facility-search.component';
import {FacilityResultComponent} from './facility-result/facility-result.component';
import {FacilityDetailsComponent} from './facility-details/facility-details.component';
import {FacilityListComponent} from './facility-list/facility-list.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactsRoutingModule,
    MatButtonModule,
    MatTooltipModule
  ],
  declarations: [
    FacilitySearchComponent,
    FacilityResultComponent,
    FacilityDetailsComponent,
    FacilityListComponent
  ],
  exports: [
    FacilitySearchComponent,
    FacilityResultComponent,
    FacilityDetailsComponent,
    FacilityListComponent
  ]

})


export class FacilityModule {
}

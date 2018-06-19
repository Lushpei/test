import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacilitySearchComponent } from './facility-search/facility-search.component';
import { FacilityResultComponent } from './facility-result/facility-result.component';
import { FacilityDetailsComponent } from './facility-details/facility-details.component';
import { FacilityListComponent } from './facility-list/facility-list.component';

const FacilityRoutes: Routes = [
    { path: 'facility-details', component: FacilityDetailsComponent },
    { path: 'facility-result', component: FacilityResultComponent },
    { path: 'facility-search', component: FacilitySearchComponent },
    { path: 'facility-list', component: FacilityListComponent },
    { path: '', component: FacilityListComponent}
];

@NgModule({
    imports: [RouterModule.forChild(FacilityRoutes)],
    exports: [RouterModule]
})

export class ContactsRoutingModule { }

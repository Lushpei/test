import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth-management/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { AccCreateComponent } from './account-management/acc-create/acc-create.component';
import { AccReadComponent } from './account-management/acc-read/acc-read.component';
import { AccUpdateComponent } from './account-management/acc-update/acc-update.component'
import { AccDeleteComponent } from './account-management/acc-delete/acc-delete.component'

import { AddressComponent } from './address/address.component';
import { AddressReadComponent } from './address/address-read/address-read.component';
import { AddressCreateComponent } from './address/address-create/address-create.component';
import { AccDetailComponent } from './account-management/acc-detail/acc-detail.component';

import { ContactsModule } from './contacts/contacts.module';
import {FacilityListComponent} from './facility/facility-list/facility-list.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: DashboardComponent},
//  { path: 'contacts', loadChildren: () => ContactsModule},
  { path: 'facility', component: FacilityListComponent},
  { path: 'acc-management', component: AccountManagementComponent, children: [
      { path: 'acc-create', component: AccCreateComponent},
      { path: 'acc-read', component: AccReadComponent},
      { path: 'acc-update/:id', component: AccUpdateComponent},
      { path: 'acc-delete', component: AccDeleteComponent},
      { path: 'acc-detail/:id', component: AccDetailComponent}

    ]},
  { path: 'address', component: AddressComponent, children: [
    { path: 'address-read', component: AddressReadComponent},
    { path: 'address-add', component: AddressCreateComponent}
  ]
},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}

]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

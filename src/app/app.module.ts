import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule} from '@angular/material';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {AccountManagementService} from './account-management/account-management.service';
import {AccountManagementComponent} from './account-management/account-management.component';
import {AccCreateComponent} from './account-management/acc-create/acc-create.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FeatherIconsPipe} from './feather-icons.pipe';
import {AccReadComponent} from './account-management/acc-read/acc-read.component';
import {AccUpdateComponent} from './account-management/acc-update/acc-update.component';
import {AccDeleteComponent} from './account-management/acc-delete/acc-delete.component';
import {LoginComponent} from './auth-management/login/login.component';
import {DashboardModuleComponent} from './dashboard/dashboard-module/dashboard-module.component';
import {DashboardService} from './dashboard/dashboard.service';
import {UserMenuComponent} from './user-menu/menu.component';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';

import {ContactsService} from './contacts/contacts.service';
import {FacilityService} from './facility/facility.service';
import {AddressComponent} from './address/address.component';
import {AddressReadComponent} from './address/address-read/address-read.component';
import {AddressCreateComponent} from './address/address-create/address-create.component';
import {AddressService} from './address/address.service';
import {AccDetailComponent} from './account-management/acc-detail/acc-detail.component';
import {AuthService} from './auth-management/auth.service';
import {FacilityModule} from './facility/facility.module';


@NgModule({
  declarations: [
    AppComponent,
    AccountManagementComponent,
    AccCreateComponent,
    DashboardComponent,
    FeatherIconsPipe,
    AccReadComponent,
    AccUpdateComponent,
    AccDeleteComponent,
    LoginComponent,
    DashboardModuleComponent,
    AddressComponent,
    AddressReadComponent,
    AddressCreateComponent,
    AccDetailComponent,
    UserMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FacilityModule,
    NgbModule.forRoot(),
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatTooltipModule,
  ],
  providers: [
    AccountManagementService,
    DashboardService,
    FacilityService,
    ContactsService,
    AddressService,
    AuthService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

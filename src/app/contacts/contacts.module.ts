import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactReadComponent } from './contact-read/contact-read.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';


@NgModule({
     imports: [
     CommonModule,
     FormsModule,
     ContactsRoutingModule
],
  declarations: [
    ContactCreateComponent,
    ContactReadComponent,
  ],

})

export class ContactsModule { }

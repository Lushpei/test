import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactReadComponent } from './contact-read/contact-read.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
const ContactsRoutes: Routes = [
    { path: 'contact-read', component: ContactReadComponent },
    { path: 'contact-add', component: ContactCreateComponent },
    { path: 'contact-detail/:id', component: ContactCreateComponent},
    { path: '', component: ContactReadComponent}
];

@NgModule({
    imports: [RouterModule.forChild(ContactsRoutes)],
    exports: [RouterModule]
})

export class ContactsRoutingModule { }

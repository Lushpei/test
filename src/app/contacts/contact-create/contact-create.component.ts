import { Component, OnInit } from '@angular/core';
import { AddressTypeViewModel } from '../../Models/AddressTypeViewModel'
import { ContactsService } from '../contacts.service';
import { ContactViewModel } from '../../Models/ContectViewModel';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {
  AddressList : AddressTypeViewModel[];
  contact: ContactViewModel = new ContactViewModel();
  show : boolean = false;
  mailingAdd : boolean = true;
  billingAdd : boolean = false;
  activityAdd : boolean = false;
  webAdd : boolean = false;
  noteAdd : boolean = false;
  isUpdate: boolean = false;
  heroForm: FormGroup;
  constructor(private contactserv : ContactsService, private route: ActivatedRoute) {}

  ngOnInit() {
    //this.contactserv.getAllAddressType().then((address : any) => {
    //  this.AddressList = address;
    //}).catch((err) => {
    //  console.error(err);
    //});
     const contactId = this.route.snapshot.paramMap.get('id');
     if(contactId !== null){
      this.contactserv.getContactbyID(contactId).subscribe(results => {
        this.contact = results;
        if(this.contact != null){
          this.isUpdate = true;
        }
        else{
          this.contact = new ContactViewModel();
        }
      });
     }
}

  onChange(city) {
    const newVal = city.target.value;
    if(newVal == "Mailing"){
      this.mailingAdd = true;
      this.billingAdd = false;
      this.activityAdd = false;
      this.webAdd = false;
      this.noteAdd = false;    
    }
    if(newVal == "Billing"){
      this.mailingAdd = false;
      this.billingAdd = true;
      this.activityAdd = false;
      this.webAdd = false;
      this.noteAdd = false;
    }
    if(newVal == "Activity"){
      this.mailingAdd = false;
      this.billingAdd = false;
      this.activityAdd = true;
      this.webAdd = false;
      this.noteAdd = false;
    }
    if(newVal == "Web"){
      this.mailingAdd = false;
      this.billingAdd = false;
      this.activityAdd = false;
      this.webAdd = true;
      this.noteAdd = false;
    }
    if(newVal == "Note"){
      this.mailingAdd = false;
      this.billingAdd = false;
      this.activityAdd = false;
      this.webAdd = false;
      this.noteAdd = true;
    }
  }

  saveContact(){
    this.contact.entityId = '';
    this.contact.contactTypeId = 2;
    this.contact.statusId = 1;
    this.contact.statusDateTime= new Date();
    this.contact.tenantId = '12345678-1234-2345-1234-123456789123';

    this.contactserv.postContact(this.contact).subscribe((data: any) => {
    }, (err: HttpErrorResponse) => {
      console.log(err.message);
    })
  }

  updateContact(){
    this.contact.entityId = '';
    this.contact.contactTypeId = 2;
    this.contact.statusId = 1;
    this.contact.statusDateTime= new Date();
    this.contact.tenantId = '12345678-1234-2345-1234-123456789123';

    this.contactserv.updateContact(this.contact).subscribe((data: any) => {
    }, (err: HttpErrorResponse) => {
      console.log(err.message);
    })
  }

}

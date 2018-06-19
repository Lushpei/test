import { Component, OnInit } from '@angular/core';
import { ContactViewModel } from '../../Models/ContectViewModel'
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-read',
  templateUrl: './contact-read.component.html',
  styleUrls: ['./contact-read.component.css']
})
export class ContactReadComponent implements OnInit {
  plusicon : string = "mdi-contacts";
  contactLists : ContactViewModel[];
  
  constructor(private contactserv : ContactsService, private router: Router) { }

  ngOnInit() {
    this.contactserv.getAllContacts().subscribe((contactLists : any) => {
      this.contactLists = contactLists;
    });
  }

  contactDetail(contactId:  string) {
    this.router.navigate(['/contacts/contact-detail/' + contactId]);
}

}

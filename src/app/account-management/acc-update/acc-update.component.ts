import { Component, OnInit, Input } from '@angular/core';
import { AccountTest } from '../Models/AccountModels';
import { AccountManagementService } from '../account-management.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-acc-update',
  templateUrl: './acc-update.component.html',
  styleUrls: ['./acc-update.component.css']
})
export class AccUpdateComponent implements OnInit {

  @Input() accountToUpdate: AccountTest = new AccountTest();

  statusIds: any[] = [
    {id: 1, name: 'option 1'},
    {id: 2, name: 'option 2'},
    {id: 3, name: 'option 3'},
    {id: 4, name: 'option 4'},
    {id: 5, name: 'option 5'}
  ];

  constructor(
              private accService: AccountManagementService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.fetchAccount();
  }

  fetchAccount(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // this.accService.getAccount(id).subscribe(result => this.accountToUpdate = result);
    console.log(this.accountToUpdate.statusId);
  }

  setNewStatus(id: any): void {
    this.accountToUpdate.statusId = id;
  }

  updateAccount() {

  }
}

import {Component, OnInit} from '@angular/core';
import {AccountTest} from '../Models/AccountModels';
import {AccountManagementService} from '../account-management.service';

@Component({
  selector: 'app-acc-create',
  templateUrl: './acc-create.component.html',
  styleUrls: ['./acc-create.component.css']
})
export class AccCreateComponent implements OnInit {

  newAccount: AccountTest;

  step: number;
  statusName: string;
  statusIds: any[] = [
    {id: 1, name: 'option 1'},
    {id: 2, name: 'option 2'},
    {id: 3, name: 'option 3'},
    {id: 4, name: 'option 4'},
    {id: 5, name: 'option 5'}
  ];


  constructor(private accService: AccountManagementService) {
    this.newAccount = new AccountTest();
    this.newAccount.name = '';
    this.newAccount.address = '';
    this.newAccount.phone = '';
    this.newAccount.accountNumber = '';
    this.step = 1;
    this.statusName = '';
  }



  setStep(step: number) {
    this.step = step;
  }

  ngOnInit() {
  }


  saveAccount() {
    console.log("this: ",this);
    console.log('saved');
  }
}

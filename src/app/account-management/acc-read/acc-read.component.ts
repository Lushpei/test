import { Component, OnInit } from '@angular/core';
import {AccountTest} from '../Models/AccountModels';
import {AccountManagementService} from '../account-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acc-read',
  templateUrl: './acc-read.component.html',
  styleUrls: ['./acc-read.component.scss']
})
export class AccReadComponent implements OnInit {

  displayedColumns = ['name', 'region', 'account'];
  search_acc_text = '' ;
  accounts: AccountTest[];

  constructor(private accService: AccountManagementService, private router: Router) { }

  ngOnInit() {
    this.accService.getAccounts().subscribe(results => this.accounts = results);
  }

  accountDetail(accountID:  string) {
      this.router.navigate(['/acc-management/acc-detail/' + accountID]);
  }

  onSearchKeyPress(): void {
      if (this.search_acc_text === '') {
        this.accService.getAccounts().subscribe(results => this.accounts = results);
      } else {
            this.accounts = Object.assign([], this.accounts).filter(
              (item => item.name.toLowerCase().indexOf(this.search_acc_text) > -1
              ||  item.region.toLowerCase().indexOf(this.search_acc_text) > -1
              ||  item.accountNumber.toLowerCase().indexOf(this.search_acc_text) > -1)
          );
      }
  }
}

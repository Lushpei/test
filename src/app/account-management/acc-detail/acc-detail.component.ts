import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountManagementService } from '../account-management.service';
import { AccountTest } from '../Models/AccountModels';

@Component({
  selector: 'app-acc-detail',
  templateUrl: './acc-detail.component.html',
  styleUrls: ['./acc-detail.component.css']
})
export class AccDetailComponent implements OnInit {

    account: Account = new AccountTest();
    constructor(private accService: AccountManagementService, private route: ActivatedRoute) { }

    ngOnInit() {
        const accountID = this.route.snapshot.paramMap.get('id');
        this.accService.getAccounts().subscribe(results => this.account = results.filter(x => x.accountID === accountID)[0]);
        console.log('TEST ' + accountID);
    }

}

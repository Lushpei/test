import { Component, OnInit} from '@angular/core';
import { AccountTest } from './Models/AccountModels';
import {AccountManagementService} from './account-management.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-account-management',
    templateUrl: './account-management.component.html',
    styleUrls: ['./account-management.component.scss']
})
export class AccountManagementComponent implements OnInit {

    constructor(private accService: AccountManagementService, private router: Router) { }

    ngOnInit() {
      this.router.navigate(['/acc-management/acc-read/']);
    }

}

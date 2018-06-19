import { Component, OnInit, Input } from '@angular/core';
import {AdminMenuModule} from '../models/adminMenuModels';
import {AdminMenuService} from '../admin-management.service';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  @Input() adminMod: AdminMenuModule;
  isActiveBtn: string;
 
  changeStateBtn(flag: string): void {
    this.isActiveBtn = flag;
  }

  adminMods: AdminMenuModule[];

  constructor(private adminService: AdminMenuService) { }

  ngOnInit() {
    this.adminService.getAdminMenu().subscribe(res => this.adminMods = res);
  }

}

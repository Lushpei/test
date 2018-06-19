import { Component, OnInit } from '@angular/core';
import {TileModule} from './models/dashboardModels';
import {Observable} from 'rxjs';
import {DashboardService} from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashMods: TileModule[];

  constructor(private dashService: DashboardService) { }

  ngOnInit() {
    this.dashService.getMockModuleDate().subscribe(res => this.dashMods = res);
  }

}

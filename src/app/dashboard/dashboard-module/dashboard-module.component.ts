import { Component, OnInit, Input } from '@angular/core';
import {TileModule} from '../models/dashboardModels';

@Component({
  selector: 'app-dashboard-module',
  templateUrl: './dashboard-module.component.html',
  styleUrls: ['./dashboard-module.component.css']
})
export class DashboardModuleComponent implements OnInit {

  @Input() tileMod: TileModule;
  isActiveBtn: string;
  constructor() { }

  changeStateBtn(flag: string): void {
    this.isActiveBtn = flag;
  }
  ngOnInit() {
  }

}

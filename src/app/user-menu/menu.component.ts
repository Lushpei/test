import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class UserMenuComponent implements OnInit {

  menuState = 'no-active';

  changeMenuState() {
    this.menuState = this.menuState === 'active' ? 'no-active' : 'active';
    console.log('menuState: ', this.menuState);
  }

  constructor() {
  }

  ngOnInit() {
  }

}

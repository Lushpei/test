import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selectedMenu: number = 0;
  sideMenu = [
    {
      title: "Dashboard",
      hrefLink: "home",
      iconImage: "home"
    },
    {
      title: "Account Management [DEMO]",
      hrefLink: "acc-management",
      iconImage: "sliders"
    },
    {
      title: "Products",
      hrefLink: "#",
      iconImage: "shopping-cart"
    },
    {
      title: "Customers",
      hrefLink: "#",
      iconImage: "users"
    },
    {
      title: "Reports",
      hrefLink: "#",
      iconImage: "bar-chart-2"
    },
    {
      title: "Integrations",
      hrefLink: "#",
      iconImage: "layers"
    }
  ];

  changeSelectedMenu(index: number){
    console.log(index);
    this.selectedMenu = index;
  }
}

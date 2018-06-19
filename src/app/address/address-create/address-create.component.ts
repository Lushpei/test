import { Component, OnInit, Input } from '@angular/core';
import { Address } from '../Models/AddressModel';
import { AddressType } from '../Models/AddressTypeModel';
import { AddressService } from '../address.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-create',
  templateUrl: './address-create.component.html',
  styleUrls: ['./address-create.component.css']
})
export class AddressCreateComponent implements OnInit {

  @Input() selectedAccountID = 0;
  newAddress: Address = new Address();
  addressTypes: AddressType[] = [
      new AddressType(1, 'Billing'),
      new AddressType(2, 'Mailing'),
      new AddressType(3, 'Activity')];

    constructor(private addressApi: AddressService, private router: Router) { }

    ngOnInit() {
    }

    changeAddressType(id: any): void {
        this.newAddress.addressTypeId = id;
    }

    saveAddress(): void {
      this.newAddress.tenantId = 'b157b403-a045-4e9e-916b-510604f28e1a';
      this.newAddress.regionId = 'b157b403-a045-4e9e-916b-510604f28e1a';
      this.newAddress.entityId = 'b157b403-a045-4e9e-916b-510604f28e1a';
      this.newAddress.createdBy = 'b157b403-a045-4e9e-916b-510604f28e1a';
      this.newAddress.lastUpdatedBy = 'b157b403-a045-4e9e-916b-510604f28e1a';
      this.newAddress.lastUpdatedBy = 'b157b403-a045-4e9e-916b-510604f28e1a';

      this.addressApi.PostAddress(this.newAddress).then((result: any) => {
        this.router.navigate(['/acc-management/acc-detail/' + this.selectedAccountID]);
      }).catch((err) => {
        console.error(err);
      });
    }
}

import { Component, OnInit } from '@angular/core';
import { AddressService } from './../address.service';
import { Address } from './../Models/AddressModel';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-address-read',
  templateUrl: './address-read.component.html',
  styleUrls: ['./address-read.component.css']
})
export class AddressReadComponent implements OnInit {

  addresses: Address[];

  constructor(private addressApi: AddressService, private addressModalPopup: NgbModal) { }

  ngOnInit() {
      this.getAllAddress();
  }

  getAllAddress() {
    this.addressApi.getAllAddress().then((result: any) => {
        this.addresses = result;
    }).catch((err) => {
      console.error(err);
    });
  }

  openAddress(content: any): void {
      this.addressModalPopup.open(content, { size : 'lg', backdrop : 'static'});
  }

}

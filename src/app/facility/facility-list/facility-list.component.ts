import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../facility.service';
import {FacilityViewModel} from '../Models/FacilityModel';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.scss']
})


export class FacilityListComponent implements OnInit {

  facilityVM: FacilityViewModel[];

  constructor(private facilityServ: FacilityService, private modalService: NgbModal, private route: ActivatedRoute) {
  }

  closeResult: string;

  open(content: any) {
    this.modalService.open(content, {size: 'lg', backdrop: 'static'});
  }

  ngOnInit() {

    const accountId = this.route.snapshot.paramMap.get("id");

    this.facilityServ.getAllFacilityByAccId(accountId).subscribe((facilityVM: any) => {
      this.facilityVM = facilityVM;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FacilityService } from '../facility.service';
import { FacilityViewModel } from '../Models/FacilityModel';

@Component({
  selector: 'app-facility-result',
  templateUrl: './facility-result.component.html',
  styleUrls: ['./facility-result.component.css']
})
export class FacilityResultComponent implements OnInit {

  facilityVM: FacilityViewModel[];
  constructor( private facilityServ: FacilityService) { }

  ngOnInit() {
    this.facilityServ.getAllFacilities().then((facilityVM: any) => {
      this.facilityVM = facilityVM;
    }).catch((err) => {
      console.log(err);
    });
  }

}

import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../facility.service';
import {FacilityViewModel} from '../Models/FacilityModel';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-facility-search',
  templateUrl: './facility-search.component.html',
  styleUrls: ['./facility-search.component.css']
})
export class FacilitySearchComponent implements OnInit {
  facilityName: string;
  firstStep: boolean = true;
  secondStep: boolean = false;
  thirdStep: boolean = false;
  facilityVM: FacilityViewModel[];
  facility: FacilityViewModel = new FacilityViewModel();
  step: number;


  constructor(private facilityServ: FacilityService, private route: ActivatedRoute, private router: Router) {
    this.step = 1;
  }

  ngOnInit() {

  }

  setStep(step: number){
  this.step = step;
}

searchfacility()
{
  const accountId = this.route.snapshot.paramMap.get("id");
  debugger;
  this.secondStep = true;
  this.facilityServ.getAllFacilityByAccIdNFacName(accountId, this.facilityName).subscribe((facilityVM: any) => {

    this.facilityVM = facilityVM;
  });
}


createnewfacility()
{
  this.thirdStep = true;
}

addNewFacility1()
{
  const accountId = this.route.snapshot.paramMap.get("id");

}


addNewFacility()
{
  const accountId = this.route.snapshot.paramMap.get("id");

  this.facilityServ.AddFacility(this.facility).then((result: any) => {
    this.router.navigate(['/acc-management/acc-detail/' + accountId]);
  }).catch((err) => {
    console.error(err);
  });
}


}

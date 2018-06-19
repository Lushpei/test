import { Injectable  } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import {  Observable } from 'rxjs/observable';
import {  catchError, map, tap } from 'rxjs/operators';
import { AppBaseServiceService  } from '../app-base-service.service';
import { FacilityViewModel } from '../facility/Models/FacilityModel'
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Injectable()   

export class FacilityService extends AppBaseServiceService {
constructor(private http: HttpClient) { super(); }

serviceRootURL:string ='http://localhost:50021/api'

getAllFacilities() {
    const facilityApi =  this.serviceRootURL+'/facility/GetAllFacilities'
        return this.http.get(facilityApi).toPromise();
 }
 
 getAllFacilityByAccId(accountId){
    const facilityApi = 'assets/facilitylist_temp.json';//  this.serviceRootURL+'/facility/GetAllFacilitiesByAccountId/'+accountId
        return this.http.get(facilityApi);
 }
 
 getAllFacilityByAccIdNFacName(accountId, facilityName){
    const facilityApi = 'assets/facilitylist_temp.json';//  this.serviceRootURL+'/facility/GetAllFacilitiesByAccountIdANDFacilityName/' + accountId + '/' + facilityName
        return this.http.get(facilityApi);
 }

 AddFacility(facility: any): Promise<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this.http.post(this.serviceRootURL+'/facility/AddFacility', facility, { headers }).toPromise();
}


}

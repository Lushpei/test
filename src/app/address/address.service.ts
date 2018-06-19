import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Address } from './Models/AddressModel';
import { AppBaseServiceService } from '../app-base-service.service';

@Injectable()
export class AddressService extends AppBaseServiceService {

    constructor(private http: HttpClient) { super(); }

    getAllAddress() {
        const addressApi = 'assets/addressModule_Temp.json'; // this.serviceUrl + '/Address/GetAllAddresses';
        return this
        .http
        .get(addressApi)
        .toPromise();
    }

    PostAddress(addressObj: any): Promise<any> {
        return this
          .http
          .post(this.serviceUrl + '/Address/AddAddress', addressObj)
          .toPromise();
    }
}

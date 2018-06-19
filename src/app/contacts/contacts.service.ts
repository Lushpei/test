import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { ContactViewModel } from '../Models/ContectViewModel';
import { AppBaseServiceService } from '../app-base-service.service';

@Injectable()

export class ContactsService extends AppBaseServiceService {
    public apiHost: string = 'assets/contactlist_temp.json';    
    constructor(private http: HttpClient) { super(); }

    getAllContacts(): Observable<ContactViewModel[]> {
        const contactApi = this.serviceUrl + '/Contact/GetAllContact';
            return this.http.get<ContactViewModel[]>(contactApi);
     }

     getContactbyID(contactId): Observable<ContactViewModel> {
        const contactApi = this.serviceUrl + '/Contact/GetSingleContact/'+contactId;
            return this.http.get<ContactViewModel>(contactApi);
     }

     getAllAddressType() {
        const addressApi =  'assets/addresstypes_temp.json';
            return this.http.get(addressApi).toPromise();
     }

     postContact(contact: ContactViewModel){

        var body = {  
            ContactId:contact.contactId,
            EntityId:contact.entityId,
            ContactTypeId:contact.contactTypeId,
            EmailAddress: contact.emailAddress,
            FirstName: contact.firstName,
            LastName: contact.lastName,
            JobTitle: contact.jobTitle,
            OfficePhone: contact.officePhone,
            MobilePhone: contact.mobilePhone,
            StatusId: contact.statusId,
            StatusDateTime: contact.statusDateTime,
            TenantId: contact.tenantId,
            CreatedBy: contact.createdBy,
            CreateDateTime: contact.createDateTime,
            LastUpdatedBy: contact.lastUpdatedBy,
            LastUpdateDateTime: contact.lastUpdateDateTime
            }  
        
         var reqheader = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
         return this.http.post(this.serviceUrl + "/Contact/AddNewContact",body, {headers: reqheader});
     }

     updateContact(contact: ContactViewModel){

        var body = {  
            ContactId:contact.contactId,
            EntityId:contact.entityId,
            ContactTypeId:contact.contactTypeId,
            EmailAddress: contact.emailAddress,
            FirstName: contact.firstName,
            LastName: contact.lastName,
            JobTitle: contact.jobTitle,
            OfficePhone: contact.officePhone,
            MobilePhone: contact.mobilePhone,
            StatusId: contact.statusId,
            StatusDateTime: contact.statusDateTime,
            TenantId: contact.tenantId,
            CreatedBy: contact.createdBy,
            CreateDateTime: contact.createDateTime,
            LastUpdatedBy: contact.lastUpdatedBy,
            LastUpdateDateTime: contact.lastUpdateDateTime
            }  
        
         var reqheader = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
         return this.http.put(this.serviceUrl+"/Contact/UpdateContact",body, {headers: reqheader});
     }
}

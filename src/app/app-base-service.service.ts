import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class AppBaseServiceService {


  serviceUrl = 'http://localhost:62124/api';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept, user-code',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
      // 'Authorization': 'my-auth-token'
    })
  };

  constructor() { }

}

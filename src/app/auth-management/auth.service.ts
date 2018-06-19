import { Injectable } from '@angular/core';
import { AppBaseServiceService } from "../app-base-service.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { RequestOptions, Request, RequestMethod } from '@angular/http'


@Injectable()
export class AuthService extends AppBaseServiceService {

  RootURL: string = 'http://localhost:50022/api';

  constructor(private http: HttpClient) { super(); }

  Login(loginModel) {
    let body = this.serializeObj(loginModel[0]);
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    return this.http.post(this.RootURL + '/auth/login', body, { headers: reqHeader });
  }

  private serializeObj(obj) {
    var result = [];
    for (var property in obj)
        result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
}
}

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AccountTest } from './Models/AccountModels';
import { AppBaseServiceService } from '../app-base-service.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountManagementService extends AppBaseServiceService {

  constructor(private http: HttpClient) { super(); }

  /** Get Action from the server **/
  getAccounts(): Observable<AccountTest[]> {
      return this.http.get<AccountTest[]>('assets/accountModule_Temp.json');
  }

  getAccountByID(accountID: string): Observable<AccountTest[]> {
      // tslint:disable-next-line:no-unused-expression
      return this.http.get<AccountTest[]>('assets/accountModule_Temp.json');
  }

  // getAccount(id: string): Observable<Account>{
  //   let cntlApi = `${this.serviceUrl}/GetValueById?=${id}`;
  //   return this.http.get<Account>(cntlApi)
  //     .pipe(
  //       tap(response => console.log(`fetched account with id = ${id}.`)),
  //       catchError(this.handleError<Account>(`getAccount id=${id}`))
  //     );
  // }

  // /** Post Action from the server **/
  // addAccount(account: Account): Observable<Account>{
  //   let cntlApi = `${this.serviceUrl}/??????`;
  //   return this.http.post<Account>(cntlApi, account, this.httpOptions)
  //     .pipe(
  //       tap(response => console.log(`added account new id=${response.id}`)),
  //       catchError(this.handleError<Account>(`addAccount`))
  //     );
  // }

  // /** Put Action from the server **/
  // updateAccount(account: Account): Observable<Account>{
  //   let cntlApi = `${this.serviceUrl}/??????`;
  //   return this.http.put<Account>(cntlApi, account, this.httpOptions)
  //     .pipe(
  //       tap(response => console.log(`updated account with id=${account.id}`)),
  //       catchError(this.handleError<Account>(`updateAccount`))
  //     );
  // }

  // /** Delete Action from the server **/
  // deleteAccount(account: Account): Observable<Account>{
  //   let cntlApi = `${this.serviceUrl}/????/${account.id}`;
  //   return this.http.delete<Account>(cntlApi, this.httpOptions)
  //     .pipe(
  //       tap(response => console.log(`deleted account with id=${account.id}`)),
  //       catchError(this.handleError<Account>(`deleteAccount`))
  //     );
  // }

  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     // this.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return null;
  //   };
  // }
}

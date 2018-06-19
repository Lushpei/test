import { Injectable } from '@angular/core';
import {AppBaseServiceService} from '../app-base-service.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {TileModule} from './models/dashboardModels';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class DashboardService extends AppBaseServiceService{

  constructor(private http: HttpClient) { super(); }

  getMockModuleDate(): Observable<TileModule[]> {
    return this.http.get<TileModule[]>('../../assets/mock-data/tileModule_Temp.json')
      .pipe(
          tap(response => console.log(`fetched tile module mock data.`)),
          catchError(this.handleError('getMockModuleDate', []))
        );
  }



  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return null;
    };
  }
}

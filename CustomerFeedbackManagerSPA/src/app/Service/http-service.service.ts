import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private API_URL = environment.API_URL;
  base_path = this.API_URL + '/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Anonymous': 'false',
      'Access-Control-Allow-Origin': '*'

    })

  }
  constructor(private http: HttpClient) { }

  // Comman Method for Evert HTTP Request
    post(item: any, apiName: any): Observable<any> {
      debugger;
    return this.http
      .post<any>(this.base_path + apiName, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // Comman Method for Evert HTTP Request
  postDataUsingMethodName(item: any, apiName: any, methodName: any): Observable<any> {
    return this.http
      .post<any>(this.base_path + apiName + '/' + methodName, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  //// Comman HTTP  Method for Fetch Record
  get(apiName: any, methodName: any): Observable<any> {
    return this.http
      .get<any>(this.base_path + apiName + '/' + methodName)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}

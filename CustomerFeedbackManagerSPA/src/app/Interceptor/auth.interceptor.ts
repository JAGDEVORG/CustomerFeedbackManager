
import { Injectable } from '@angular/core';
import { AuthServiceService } from '../Service/auth-service.service'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, from, lastValueFrom } from 'rxjs';
import { Router, ActivatedRoute } from "@angular/router";
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import * as moment from 'moment';
import { environment } from '../../environments/environment';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _authService: AuthServiceService) { }

// ankit code

//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     const token = this._authService.getAuthToken()
//     // add auth header with jwt if user is logged in and request is to api url
//     const currentUser = this._authService.currentUserValue;
//     const isLoggedIn = currentUser && currentUser.token;
//     const isApiUrl = request.url.startsWith(environment.API_URL);
//     if (isLoggedIn && isApiUrl) {
//       // If we have a token, we set it to the header
//       request = request.clone({
//         setHeaders: { Authorization: `Authorization token ${token}` }
//       });
//     }
//     return next.handle(request).pipe(
//       catchError((err) => {
//         if (err instanceof HttpErrorResponse) {
//           if (err.status === 401) {
//             // redirect user to the logout page
//           }
//         }
//         return throwError(err);
//       })
//     )
//   }
// }



// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {

//   constructor(private router: Router) { }

//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     return next.handle(request);
//   }



intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        
  if(!request.url.includes("login") && !request.url.includes("token"))
      {
         return  from(this.handleAccess(request, next)).pipe(
          map(resp => {           
              return resp;
          }),
          catchError(err => {
                return throwError(err);                
            }));
                  
      }
      else
      {
            return next.handle(request).pipe(
              map(res => {                                                  
                 return res;
              }),
              catchError(err => {                  
                return throwError(err);                  
            }));
      } 
}


validateToken()
{
  let token = this._authService.getAuthToken();
  console.log(moment(moment.utc(this._authService.getAuthTokenExpiryDate()).format('YYYY-MM-DDTHH:mm:ss')).toDate())
  console.log(moment(moment.utc(new Date()).format('YYYY-MM-DDTHH:mm:ss')).toDate());
  if(token != null && token != '' && (moment.utc(this._authService.getAuthTokenExpiryDate()).toDate() >  moment.utc(new Date()).toDate()))
  {
    return true;
  }
  else
  {
    return false
  }
}
  
private async handleAccess(request: HttpRequest<any>, next: HttpHandler)
 {    
  
 if(!this.validateToken())
 {
     //await this._authService.getJWTAuthToken();        
 }  
  request = request.clone({
  setHeaders: { Authorization: `Bearer ${this._authService.getAuthToken()}` }
});
return await lastValueFrom(next.handle(request));
};
 
}

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
  }
}

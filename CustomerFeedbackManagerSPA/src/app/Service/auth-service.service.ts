import { Injectable } from '@angular/core';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../Account/model/User';
import { environment } from '../../environments/environment';
import { AuthInterceptor } from '../Interceptor/auth.interceptor';

import { firstValueFrom } from 'rxjs';
import { TokenRequest } from '../Models/token-request';
import { HttpServiceService } from './http-service.service';




@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  authToken : string;
  authTokenExpiryDate : string;
  apiName = "authentication/token";

 private currentUserSubject = new BehaviorSubject<any>(null); // initializing with no user object since logged out
//  constructor(private http: HttpClient) {
//   const userJson = localStorage.getItem('currentUser');
//   this.currentUser = userJson !== null ? JSON.parse(userJson) : new User();
//  }

public currentUser: Observable<User>;
constructor(private _httpServiceService: HttpServiceService) {
  const userJson = localStorage.getItem('currentUser');
  this.currentUser = userJson !== null ? JSON.parse(userJson) : new User();
 }


 //private currentUserSubject: BehaviorSubject<User>;
 


  public get currentUserValue(): User {
   return this.currentUserSubject.value;
}

//   logout() {
//     throw new Error('Method not implemented.');
//   }

 
// login(userCredential): Observable<any>  {
//   return this.http.post<any>(`${environment.API_URL}/users/authenticate`, {userCredential})
//       .pipe(map(user => {
//           // login successful if there's a jwt token in the response
//           if (user && user.token) {
//               // store user details and jwt token in local storage to keep user logged in between page refreshes
//               localStorage.setItem('currentUser', JSON.stringify(user));
//               this.currentUserSubject.next(user);
//           }
//           return user;
//       }));
// }

//   getAuthToken(): string {
//     return "Tok123"
//   }


async getJWTAuthToken(tokenRequest: TokenRequest) {
  await firstValueFrom(this._httpServiceService.post(tokenRequest, this.apiName))
  .then((response) => {
    debugger
    if(response != null){
      localStorage.setItem("token", response.token);
      localStorage.setItem("tokenExpiry", response.expireAt);     
    }
    else
    {
      localStorage.setItem("token", "");
      localStorage.setItem("tokenExpiry", "");
    }       
  })    
}

getAuthToken() {
  return localStorage.getItem("token");
}

getAuthTokenExpiryDate() {
  return localStorage.getItem("tokenExpiry");
}

}

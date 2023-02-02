import { Injectable } from '@angular/core';
import { Router,ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../Service/auth-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthServiceService
){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      const currentUser = [{role:"admin"}];
        if (currentUser) {
            // check if route is restricted by role
            // if (route.data['roles'] && route.data['roles'].indexOf(currentUser.role) === 1) {
            //     // role not authorised so redirect to home page
            //     this.router.navigate(['/customerlist']);
            //     return false;
            // }
            

            // authorised so return true
            return true;

  }
  this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;
}
  
} 

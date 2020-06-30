import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedauthenticationserviceService } from './hardcodedauthenticationservice.service';
import { BasicAuthenticationService } from './basic-authenticationservice.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardcodedauthenticationserviceService: HardcodedauthenticationserviceService,
              private basicAuthenticationService: BasicAuthenticationService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if(this.basicAuthenticationService.isUserLoggedIn())
      return true
       this.router.navigate(['login']);
       return false;

  }

}

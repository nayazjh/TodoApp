import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedauthenticationserviceService } from './hardcodedauthenticationservice.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardcodedauthenticationserviceService: HardcodedauthenticationserviceService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if(this.hardcodedauthenticationserviceService.isUserLoggedIn())
      return true
       this.router.navigate(['login']);
       return false;

  }

}

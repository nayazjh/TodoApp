import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authenticationservice.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(private basicAuthenticationService: BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    // let username = 'nayazjh';
    // let password = 'born2win';

    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();

    if(basicAuthHeaderString && username){
    request = request.clone({
      setHeaders : {
        Authorization: basicAuthHeaderString
      }
    })
    }
    return next.handle(request);
  }

}

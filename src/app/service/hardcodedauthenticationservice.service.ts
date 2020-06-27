import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedauthenticationserviceService {

  constructor() { }

  authenticate(username, password){
    if(username === "nayazjh" && password === "abc"){
      sessionStorage.setItem('authenticatedUser', username);
      return true;
  } else {
    return false;
  }
}

isUserLoggedIn(){
  let user = sessionStorage.getItem('authenticatedUser');
  return !(user === null)
}

logout(){
  sessionStorage.removeItem('authenticatedUser');
}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedauthenticationserviceService } from '../service/hardcodedauthenticationservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = 'nayazjh';
  password = 'abc';
  errorMessage = "Invalid Credentials";
  invalidLogin = false;

  constructor(private router: Router,
    private hardCodedAuthenticationService: HardcodedauthenticationserviceService) {
    
  }

  ngOnInit() {
  }

  login(){
    if(this.hardCodedAuthenticationService.authenticate(this.username, this.password)){
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    }
    else {
      this.invalidLogin = true;
    }
    console.log('Username:', this.username);
    console.log('Username:', this.password);

  }

}

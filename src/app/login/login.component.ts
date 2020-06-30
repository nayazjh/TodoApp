import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedauthenticationserviceService } from '../service/hardcodedauthenticationservice.service';
import { BasicAuthenticationService } from '../service/basic-authenticationservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = 'nayazjh';
  password = '';
  errorMessage = "Invalid Credentials";
  invalidLogin = false;

  constructor(private router: Router,
    private hardCodedAuthenticationService: HardcodedauthenticationserviceService,
    private basicAuthenticationService: BasicAuthenticationService) {
    
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
    console.log('Password:', this.password);

  }

  handleBasicAuthLogin(){
    this.basicAuthenticationService.executeBasicAuthenticationService(this.username, this.password)
    .subscribe(
      data => {
        console.log(data);
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
      },
      error => {
        console.log(error);
        
        this.invalidLogin = true;
      }
    )
    }
  

}

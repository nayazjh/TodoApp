import { Component, OnInit } from '@angular/core';
import { HardcodedauthenticationserviceService } from '../service/hardcodedauthenticationservice.service';
import { BasicAuthenticationService } from '../service/basic-authenticationservice.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedauthenticationserviceService: HardcodedauthenticationserviceService,
              private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
    this.basicAuthenticationService.logout();
  }

}

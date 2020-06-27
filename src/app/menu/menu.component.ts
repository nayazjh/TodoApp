import { Component, OnInit } from '@angular/core';
import { HardcodedauthenticationserviceService } from '../service/hardcodedauthenticationservice.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

 // isLoggedin: boolean = false;
  constructor(private hardCodedAuthenticationService: HardcodedauthenticationserviceService) {

   }

  ngOnInit() {
    //this.isLoggedin = this.hardCodedAuthenticationService.isUserLoggedIn();
  }

}

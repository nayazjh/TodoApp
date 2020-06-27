import { Component, OnInit } from '@angular/core';
import { HardcodedauthenticationserviceService } from '../service/hardcodedauthenticationservice.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedauthenticationserviceService: HardcodedauthenticationserviceService) { }

  ngOnInit() {
    this.hardcodedauthenticationserviceService.logout();
  }

}

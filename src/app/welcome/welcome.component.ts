import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  username;
  res:string;
  constructor(private route:ActivatedRoute,
              private welcomeDataService: WelcomeDataService) { }

  ngOnInit() {
    this.username = this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
   //console.log(this.welcomeDataService.executeHelloBeanService());
    this.welcomeDataService.executeHelloBeanService().subscribe(
      response => this.handleResponse(response),
      error => this.handleErrorResponse(error)
    );

  }

  getWelcomeMessageWithPathVariable(){
    this.welcomeDataService.executeHelloBeanServiceWithPathVariable(this.username).subscribe(
      response => this.handleResponse(response),
      error => this.handleErrorResponse(error)
    );

  }

  handleResponse(response){
    this.res = response.message;

  }

  handleErrorResponse(error){
    this.res = error.error.message;

  }


}

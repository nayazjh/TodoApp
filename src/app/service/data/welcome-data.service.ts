import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean{
  constructor(public message:string){}
}
@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(private httpClient: HttpClient) { }

  executeHelloBeanService(){
     return this.httpClient.get<HelloWorldBean>('http://localhost:8090/hello-world-bean');
  }

  executeHelloBeanServiceWithPathVariable(name){
    // let basicAuthHeaderString = this.createBasicAuthenticationHeader();

    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // }) 

    return this.httpClient.get<HelloWorldBean>(`${API_URL}/hello-world-bean/${name}`, 
    //{headers}
    );
 }
 
//  createBasicAuthenticationHeader(){
//    let username = 'nayazjh';
//    let password = 'born2win';
//    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password); 
//    return basicAuthHeaderString;  
//  }  
}

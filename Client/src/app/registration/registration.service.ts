import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  baseUrl = 'http://localhost:1337';
  constructor(private _http: HttpClient) { }

  signUp(params){
    return this._http.post(this.baseUrl + '/signup', params);
  }
  login(params){
    return this._http.post(this.baseUrl + '/login' , params);
  }
  sendFeedback(params){
    return this._http.post(this.baseUrl + '/sendFeedback', params);
  }
  getFeedback(){
    return this._http.get(this.baseUrl +'/getfeedback');
  }
}

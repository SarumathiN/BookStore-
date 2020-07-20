import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  constructor(private _httpClient: HttpClient) { }
  baseUrl = 'http://192.168.43.229:1337';

  addBook(params){
    return this._httpClient.post(this.baseUrl + '/addBook', params);
  }
  getTranscations(param){
    return this._httpClient.post(this.baseUrl + '/getOrders', param);
  }
  getRequestedBooks(param){
    return this._httpClient.post(this.baseUrl + '/getRequestedBooks' , param);
  }
  salesApproval(param){
    return this._httpClient.post(this.baseUrl + '/salesApproval' , param);
  }
  deliveryComplete(param){
    return this._httpClient.post(this.baseUrl +'/deliveryComplete' ,param);
  }
  getFeedback(){
    return this._httpClient.get(this.baseUrl + '/getFeedback');
  }
  getDashBoardCount(){
    return this._httpClient.get(this.baseUrl + '/getDashBoardCount');
  }
}

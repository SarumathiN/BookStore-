import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:1337';
  constructor(private _http: HttpClient) { }

  getBooks(param){
    return this._http.post(this.baseUrl + '/getBooks',param);
  }
  getBookDetails(param) {
    return this._http.post(this.baseUrl + '/getBookDetails', param);
  }
  placeOrders(param) {
    return this._http.post(this.baseUrl + '/placeOrders', param);
  }
  getOrdersList(param){
    return this._http.post(this.baseUrl + '/getOrdersList',param);
  }
  deleteOrder(param){
    return this._http.post(this.baseUrl + '/deleteOrder',param);
  }
  updateUser(param){
    return this._http.post(this.baseUrl + '/updateUser',param);
  }
  finalizeBook(param){
    return this._http.post(this.baseUrl + '/finalizeBook',param);
  }
  getUserBooks(param){
    return this._http.post(this.baseUrl + '/getUserBooks',param);
  }
  getCategory(param){
    return this._http.post(this.baseUrl + '/getCategory',param);
  }
  getBookCount(param){
    return this._http.post(this.baseUrl + '/getBookCount',param);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any;
  constructor(private _router : Router) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser(){
   this.user = JSON.parse(localStorage.getItem('user'))
  }
  logout(){
    this._router.navigate(['/home/home1']);
  } 
  profile(){
    this._router.navigate(['/user/profile']);
  }
  home(){
    if(this.user.firstName === 'Admin'){
      this._router.navigate(['/bookstore/admin']);
    }else{
      this._router.navigate(['/user/userhome']);
    }
    
  }
  clickStatus(){
    this._router.navigate(['/user/sell/viewstatus']);
  }
  clickBook(){
    this._router.navigate(['/user/sell/addBooks']);
  }
  cart(){
    this._router.navigate(['/user/cart'])
  }
 }

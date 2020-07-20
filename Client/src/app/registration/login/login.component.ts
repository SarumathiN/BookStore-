import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService} from './../registration.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router,private _registration: RegistrationService) { }
  user = {
    name: '',
    password: ''
  };
  ngOnInit(): void {
  }
  login(){
    this._registration.login(this.user).subscribe((data:any)=>{
      if(data.email ==='admin@gmail.com' && data.password === 'admin'){
        this._router.navigate(['/bookstore/admin']);
      }
      else{
        this._router.navigate(['/user/userhome']);
      }
      localStorage.setItem('user', JSON.stringify(data))
    })
  }
}

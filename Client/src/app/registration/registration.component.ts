import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  home(){
    this._router.navigate(['/home/home1']);
  }

}

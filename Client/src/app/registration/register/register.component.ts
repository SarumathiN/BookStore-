import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from "./../registration.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    firstName:'',
    lastName :'',
    email: '',
    phone:'',
    password:'',
    hfno:'',
    street:'',
    village:'',
    pin:'',
    state:'',
    city:''
  };
  rePassword : any;
  isPasswordMatch = true;
  states: Array<any>;
	cities: Array<any>;

  States: Array<any> = [
		{name: 'TamilNadu', cities: ['Chennai','Madurai','Kanyakumari','Salem','Trichy','Coimbatore','Tirunelveli','Chengalpattu','Pondicherry']},
    {name: 'Kerala', cities: ['Trivandrum','Kochi','Ernakulam','Kollam','Kozhikode','Thrissur','Kottayam','Palakkad'] },
    {name: 'Telangana', cities: ['Warangal','Nizambad','Karimnagar','Secundarabad'] },
    {name: 'Andhra Pradesh', cities: ['Hyderabad','Amaravati','Vijayawada','Vishakapattinam','Tirupati','Rajamundry','Kakinada','Ellore','Vellore'] },
    {name: 'Karnataka', cities: ['Bangalore','Mangalore','Hubli','Belagum','Mysore','Vijayapur','Udupi'] },
  ];
 
  constructor(private _router: Router,private _registration_service: RegistrationService) { }

  ngOnInit(): void {
  }
  signUp(){
    this.passWordValid();
    if(this.isPasswordMatch){
    this._registration_service.signUp(this.user).subscribe(data => {
      this._router.navigate(['/registration/login']); 
    });
   }
    this.cancel();
   } 
  changeState(state) {
		this.cities = this.States.find(city => city.name == state).cities;
   }
 cancel(){
   this.user = {
    firstName:'',
    lastName :'',
    email: '',
    phone:'',
    password:'',
    hfno:'',
    street:'',
    village:'',
    pin:'',
    state:'',
    city:''
   };
   this.rePassword = '';
 }
 passWordValid(){
  this.isPasswordMatch = true;
  if (this.user.password !== this.rePassword) {
    this.isPasswordMatch = false;
    this.rePassword = '';
  }else {
    this.isPasswordMatch = true;
  }
 }
}

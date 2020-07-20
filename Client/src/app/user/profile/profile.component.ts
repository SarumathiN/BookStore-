import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  states: Array<any>;
  cities: Array<any>;
  isEditing = false;
  States: Array<any> = [
		{name: 'TamilNadu', cities: ['Chennai','Madurai','Kanyakumari','Salem','Trichy','Coimbatore','Tirunelveli','Chengalpattu','Pondicherry']},
    {name: 'Kerala', cities: ['Trivandrum','Kochi','Ernakulam','Kollam','Kozhikode','Thrissur','Kottayam','Palakkad'] },
    {name: 'Telangana', cities: ['Warangal','Nizambad','Karimnagar','Secundarabad'] },
    {name: 'Andhra Pradesh', cities: ['Hyderabad','Amaravati','Vijayawada','Vishakapattinam','Tirupati','Rajamundry','Kakinada','Ellore','Vellore'] },
    {name: 'Karnataka', cities: ['Bangalore','Mangalore','Hubli','Belagum','Mysore','Vijayapur','Udupi'] },
  ];
  user:any;
  noUpdate = false;
  change_user : any;
  constructor(private userservice: UserService,private _router : Router) { }

  ngOnInit(): void {
    this.isEditing= false;
    this.getUser();
  }
  getUser(){
    this.user = JSON.parse(localStorage.getItem('user'));
  }
  changeState(state) {
    this.cities = this.States.find(city => city.name == state).cities;
    this.isEditing = true;
   }
   updateUser(){
     this.noUpdate = false;
     this.userservice.updateUser(this.user).subscribe((data:any) =>{
           this._router.navigate(['/home/home1']);     
     });
   }

}

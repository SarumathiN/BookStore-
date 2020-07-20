import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UserService } from './../user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  orderList = [];
  user : any;
  user_id : any;
  total: any = 0;
  total_quan:any;
  states: Array<any>;
  cities: Array<any>;
  final:any;
  finalizeObject ={
    useremail :''
  };

  States: Array<any> = [
		{name: 'TamilNadu', cities: ['Chennai','Madurai','Kanyakumari','Salem','Trichy','Coimbatore','Tirunelveli','Chengalpattu','Pondicherry']},
    {name: 'Kerala', cities: ['Trivandrum','Kochi','Ernakulam','Kollam','Kozhikode','Thrissur','Kottayam','Palakkad'] },
    {name: 'Telangana', cities: ['Warangal','Nizambad','Karimnagar','Secundarabad'] },
    {name: 'Andhra Pradesh', cities: ['Hyderabad','Amaravati','Vijayawada','Vishakapattinam','Tirupati','Rajamundry','Kakinada','Ellore','Vellore'] },
    {name: 'Karnataka', cities: ['Bangalore','Mangalore','Hubli','Belagum','Mysore','Vijayapur','Udupi'] },
  ];
  constructor(private route: ActivatedRoute,private userservice: UserService,private _router : Router) { }

  ngOnInit(): void {  
    this.getUser();
    this.getOrderList(this.user_id);
  }
  changeState(state) {
		this.cities = this.States.find(city => city.name == state).cities;
   }
  getUser(){
    this.user = JSON.parse(localStorage.getItem('user'));
    this.user_id = this.user.id;
  }
  getOrderList(id){
    this.total = 0;
    this.total_quan = 0;
    this.final = 0;
    this.userservice.getOrdersList(id).subscribe((data:any) => {
      this.orderList = data;
      for(let i=0;i<this.orderList.length;i++){
        this.total = this.total+parseInt(this.orderList[i].total_amount);
        this.total_quan = this.total_quan+parseInt(this.orderList[i].quantity);
       }
   });
 }
finalAmount(){
  this.final = 0;
  this.final = this.total + 50;
}
finalizeBooks(){
  this.finalizeObject.useremail = this.user.email;
  this.userservice.finalizeBook(this.finalizeObject).subscribe((data:any )=>{
   //console.log(data);
   this.getOrderList(this.user_id);
  });
}
changeProfile(){
  this._router.navigate(['/user/profile']);
}
}

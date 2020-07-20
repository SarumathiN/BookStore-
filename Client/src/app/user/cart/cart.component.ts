import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../user.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orderList = [];
  user:any;
  deletedIndex : any;
  total : number;
  user_id: any;
  total_quan:any;
  constructor(private route: ActivatedRoute,private userservice: UserService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getUser();
    this.getOrderList(this.user);
  }
  getUser(){
    this.user = JSON.parse(localStorage.getItem('user'));
    
  }
  getOrderList(user){
    this.total = 0;
    this.total_quan = 0;
    this.userservice.getOrdersList(user).subscribe((data:any) => {
      this.orderList = data;
      for(let i=0;i<this.orderList.length;i++){
        this.orderList[i].book_image = this.sanitizer.bypassSecurityTrustUrl(this.orderList[i].book_image);
        this.total = this.total+parseInt(this.orderList[i].total_amount);
        this.total_quan = this.total_quan+parseInt(this.orderList[i].quantity);
       }
   });
 }
 deleteOrder() {
  this.userservice.deleteOrder({ id: this.orderList[this.deletedIndex].id }).subscribe((data:any) => {
    this.orderList.splice(this.deletedIndex, 1);
    this.total = this.total - data[0].total_amount;
    this.total_quan = this.total_quan - parseInt(data[0].quantity);
  });
}

 
}

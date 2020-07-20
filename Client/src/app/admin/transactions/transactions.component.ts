import { Component, OnInit } from '@angular/core';
import { AdminService } from './../admin.service';
declare var $: any;

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions = [];
  reqOjb ={
    status :''
  };
  book: any ={
    id:'',
    name : '',
    author : '',
    new_price : '',
    old_price: '',
    description : '',
    minidescription : '',
    isbn : '',
    publication : '',
    edition : '',
    image : '',
    category:'',
    condition:'',
    upload_user:'',
    upload_email:'',
    commission_price:''
  };
  constructor(private adminservice: AdminService) { }

  ngOnInit(): void {
    this.getTramsactions();
  }
  getTramsactions(){
    this.reqOjb.status = "Purchased";
    this.adminservice.getTranscations(this.reqOjb).subscribe((data:any) =>{
      this.transactions = data;
      for(let i=0;i<this.transactions.length;i++){
        this.transactions[i].updatedAt = new Date(this.transactions[i].updatedAt);
        this.transactions[i].updatedAt = (this.transactions[i].updatedAt.getMonth() + 1) + '/' + this.transactions[i].updatedAt.getDate() + '/' +  this.transactions[i].updatedAt.getFullYear();
      }
    })
  }
  deliveryComplete(book){
    this.adminservice.deliveryComplete(book).subscribe((data:any) =>{
      this.getTramsactions();
      $('#deliveredOrder').modal('show');
    })
  }
}

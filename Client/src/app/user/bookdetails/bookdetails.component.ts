import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../user.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  count:any;
  orderObject={
    book_id:'',
    user_id:'',
    book_name:'',
    book_author:'',
    book_image:'',
    book_new_price:'',
    book_old_price:'',
    book_isbn:'',
    upload_user:'',
    upload_email:'',
    order_user:'',
    order_email:'',
    quantity:'',
    status:'',
    total_amount:'',
    commission_price:'',
    availability:''
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
    availability:'',
    commission_price:''
  };
  bookid = '';
  imageUrl: any;
  user: any;
  quantity : '';
  noBooks: boolean = false;
  constructor(private _router: Router,private route: ActivatedRoute,private userservice: UserService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.bookid = this.route.snapshot.queryParamMap.get('id')
    this.getUser();
    this.getBookDetails(this.bookid);
  }
  getUser(){
    this.user = JSON.parse(localStorage.getItem('user'));
  }
  getBookDetails(id){
    this.noBooks = false;
    this.userservice.getBookDetails({id}).subscribe((data : any )=> {
      this.getBook(data);
      this.imageUrl = data[0].image;
      if(this.book.availability === 0){
        this.noBooks = true;
      }
    });
  }
  getCount(){
    this.userservice.getBookCount({isbn:this.book.isbn}).subscribe((data:any) =>{
      this.count = data;
    })
  }
  getBook(data){
    this.book.id=data[0].id;
    this.book.name = data[0].name;
    this.book.author=data[0].author;
    this.book.description=data[0].description;
    this.book.publication=data[0].publication;
    this.book.edition=data[0].edition;
    this.book.new_price=data[0].new_price;
    this.book.old_price=data[0].old_price;
    this.book.isbn=data[0].isbn;
    this.book.category=data[0].category;
    this.book.condition=data[0].condition;
    this.book.image = this.sanitizer.bypassSecurityTrustUrl(data[0].image);
    this.book.upload_email = data[0].upload_email;
    this.book.upload_user = data[0].upload_user;
    this.book.availability = data[0].availability;
    if(data[0].commission_price){
      this.book.commission_price = data[0].commission_price;
    }
  }
  placeOrder(){
    this.getOrderObject();
    this.userservice.placeOrders(this.orderObject).subscribe((data:any)=>{
      this._router.navigate(['/user/cart']);
    });
  }
  getOrderObject(){
    this.orderObject.total_amount = '0';
    this.orderObject.book_id = this.book.id;
    this.orderObject.user_id = this.user.id;
    this.orderObject.book_name = this.book.name;
    this.orderObject.book_author = this.book.author;
    this.orderObject.book_image = this.imageUrl;
    this.orderObject.book_isbn = this.book.isbn;
    this.orderObject.book_new_price = this.book.new_price;
    this.orderObject.book_old_price = this.book.old_price;
    this.orderObject.upload_email = this.book.upload_email;
    this.orderObject.upload_user = this.book.upload_user;
    if(this.book.availability > 1){
      this.orderObject.quantity = this.quantity;
    }else{
    this.orderObject.quantity = '1';
    }
    this.orderObject.order_email = this.user.email;
    this.orderObject.order_user = this.user.firstName;
    this.orderObject.status = 'Addedcart';
    this.orderObject.availability = this.book.availability;
    if(this.book.commission_price)
    this.orderObject.commission_price = this.book.commission_price;
  }
}


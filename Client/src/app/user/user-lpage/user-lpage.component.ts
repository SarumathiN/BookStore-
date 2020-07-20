import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-user-lpage',
  templateUrl: './user-lpage.component.html',
  styleUrls: ['./user-lpage.component.css']
})
export class UserLpageComponent implements OnInit {

  rangevalue = 0;
  books: any={
    bname:'',
    bimage:'',
    description:'',
    price:''
  };
  noBooks : any;
  user : any;
  bookslist = [];
  images = [];
  image : any;
  status = '';
  value : any;
  reqObj ={
    status :'',
    user_email : ''
  }
  constructor(private _userservice: UserService,private sanitizer: DomSanitizer) { }
  

  ngOnInit(): void {
    this.getUserDetails();
    this.getBooksList();
   }
   getUserDetails(){
     this.user = JSON.parse(localStorage.getItem('user'));
   }
  valueChanged(e) {
    this.rangevalue = e.target.value;
  }
  getBooksList(){
    this.noBooks = false;
    this.reqObj.status = 'Approved';
    this.reqObj.user_email = this.user.email
    this._userservice.getBooks(this.reqObj).subscribe((data:any)=>{
       this.bookslist = data;  
       for(let i=0;i<this.bookslist.length;i++){
       this.bookslist[i].image = this.sanitizer.bypassSecurityTrustUrl(this.bookslist[i].image);
       }
    });
  }
  selectChanged(value){
    this.noBooks = false;
    this.bookslist = [];
    if(value === "All Books"){
      this.getBooksList();
    }else{
    this._userservice.getCategory({category : value}).subscribe((data:any) =>{
       if(data.length){
        this.bookslist = data; 
       for(let i=0;i<this.bookslist.length;i++){
        this.bookslist[i].image = this.sanitizer.bypassSecurityTrustUrl(this.bookslist[i].image);
       }
      }
      else{
        this.getBooksList();
        this.noBooks = true;
      }
    });
  }
  }


}

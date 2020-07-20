import { Component, OnInit } from '@angular/core';
import { UserService } from './../../user.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {

  bookList = [];
  user:any;
  reqObj = {
    user_email:'',
  };
  constructor(private userservice: UserService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getUser();
    this.getBooks();
  }
  getUser(){
    this.user = JSON.parse(localStorage.getItem('user'));
  }
  getBooks(){
    this.reqObj.user_email = this.user.email;
    this.userservice.getUserBooks(this.reqObj).subscribe((data:any) => {
      this.bookList = data;
      for(let i=0;i<this.bookList.length;i++){
        this.bookList[i].image = this.sanitizer.bypassSecurityTrustUrl(this.bookList[i].image);
        this.bookList[i].updatedAt = new Date(this.bookList[i].updatedAt);
        this.bookList[i].updatedAt = (this.bookList[i].updatedAt.getMonth() + 1) + '/' + this.bookList[i].updatedAt.getDate() + '/' +  this.bookList[i].updatedAt.getFullYear();
        this.bookList[i].createdAt = new Date(this.bookList[i].createdAt);
        this.bookList[i].createdAt = (this.bookList[i].createdAt.getMonth() + 1) + '/' + this.bookList[i].createdAt.getDate() + '/' +  this.bookList[i].createdAt.getFullYear();
        }
    })
  }
}

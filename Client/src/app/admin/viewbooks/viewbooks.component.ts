import { Component, OnInit } from '@angular/core';
import { AdminService } from './../admin.service';
import { DomSanitizer } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent implements OnInit {
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
    upload_email:''
  };
  booksList = [];
  selectedBook : '';
  deleteIndex : '';
  user : any;
  reqObj = {
     status : ''
  }
  bookid = '';
  approved_book = {
    new_price : '',
    commission_price:''
  };
  constructor(private adminservice:AdminService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getUser();
    this.getBooks();
  }
  getBooks(){
    this.reqObj.status = 'Requested';
    this.adminservice.getRequestedBooks(this.reqObj).subscribe((data: any)=>{
      this.booksList = data;
      for(let i=0;i<this.booksList.length;i++){
        this.booksList[i].image = this.sanitizer.bypassSecurityTrustUrl(this.booksList[i].image);
        }
    })
  }
  getUser(){
    this.user = JSON.parse(localStorage.getItem('user'))
  }
  findSelectedBook(bookId) {
    this.selectedBook = this.booksList.find(book => book.id === bookId);
  }
  viewBook(book) {
    this.book = Object.assign({}, book);
    this.findSelectedBook(book.bookId);
  }
  salesApproval(book){
    this.adminservice.salesApproval({id : book.id}).subscribe((data: any) =>{
      this.approved_book.new_price = data[0].new_price;
      this.approved_book.commission_price = data[0].commission_price;
      $('#approvedBook').modal('show');
      this.getBooks();
      
    });
  }
  // deleteBook(){
  //   this.booksList.splice(this.deleteIndex, 1);
  // }
 
}

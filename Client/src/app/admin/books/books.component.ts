import { Component,ViewChild, OnInit } from '@angular/core';
import { AdminService } from './../admin.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  @ViewChild('fileInput')
  myVar1: any;

  book : any = {
    name : '',
    author : '',
    old_price : '',
    new_price :'',
    availability:'',
    description : '',
    minidescription : '',
    isbn : '',
    publication : '',
    edition : '',
    image : '',
    category:'',
    status:'',
    condition:'',
    upload_user:'',
    upload_email:''
  };
  isBookValid = true;
  bookList = [];
  user:any;
  constructor(private _adminService : AdminService) { }

  ngOnInit(): void {
    this.getUser();
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
      this.book.image = event.target.result;
      }
    }
  }
  getUser(){
    this.user = JSON.parse(localStorage.getItem('user'))
  }
  view(){
    console.log(this.book);
  }
  addBook(){
    this.bookValidate();
    this.book.upload_user = this.user.firstName;
    this.book.upload_email = this.user.email;
    if(this.isBookValid){
      this._adminService.addBook(this.book).subscribe((data:any)=> {
        
        this.cancel();
      });
    }
  }
  bookValidate(){
    this.isBookValid = true;
    if(this.book.name === '')
      this.isBookValid = false;
    else if(this.book.author === '')
      this.isBookValid = false;
    else if(this.book.publication === '')
      this.isBookValid = false;
    else if(this.book.edition === '')
      this.isBookValid = false;
    else if(this.book.new_price === '')
    this.isBookValid = false;
    else if(this.book.isbn === '')
    this.isBookValid = false;
    else if(this.book.description === '')
    this.isBookValid = false;
    else if(this.book.minidescription === '')
    this.isBookValid = false;
    else if (this.book.image === '')
    this.isBookValid = false;
    else if (this.book.category === '')
    this.isBookValid = false;
    else if (this.book.availability === '')
    this.isBookValid = false;
    else
    this.isBookValid = true;
  }
  cancel(){
    this.book = {
      name : '',
      author : '',
      new_price : '',
      availabiltiy :'',
      description : '',
      minidescription : '',
      isbn : '',
      publication : '',
      edition : '',
      image : '',
      category:'',
      upload_user:'',
      upload_email:''
    };
    this.myVar1.nativeElement.value = '';
  }
}

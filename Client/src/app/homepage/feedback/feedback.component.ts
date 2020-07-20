import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationService } from './../../registration/registration.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {


  feedback = {
    name: '',
    message:'',
    email:''
  };
  isFeedbackValid = true;
  constructor(private _http: HttpClientModule,private _registration: RegistrationService) { }

  ngOnInit(): void {
  }
  sendFeedback(){
    this.feedbackValidate();
    if(this.isFeedbackValid){
      this._registration.sendFeedback(this.feedback).subscribe((data:any)=>{
        console.log(data);
        this.cancel();
      });
    }
  }
  feedbackValidate(){
    this.isFeedbackValid= true;
    if(this.feedback.email === '')
    this.isFeedbackValid = false;
    else if(this.feedback.name === '')
    this.isFeedbackValid = false;
    else if(this.feedback.message === '')
    this.isFeedbackValid = false;
    else
    this.isFeedbackValid = true;
  }
  cancel(){
    this.feedback ={
      email : '',
      name :'',
      message :''
    };
  }
}

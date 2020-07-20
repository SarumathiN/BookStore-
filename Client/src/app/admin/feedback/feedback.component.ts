import { Component, OnInit } from '@angular/core';
import { AdminService } from './../admin.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedback = [];
  constructor(private adminservice:AdminService) { }

  ngOnInit(): void {
    this.getFeedback();
  }
  getFeedback(){
    this.adminservice.getFeedback().subscribe((data:any) => {
      this.feedback = data;
    })
  }

}

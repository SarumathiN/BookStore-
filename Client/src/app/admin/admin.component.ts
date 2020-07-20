import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  usercount: any;
  requestcount : any;
  purchasecount : any;
  feedcount : any;
  constructor(private admin:AdminService) { }

  ngOnInit(): void {
    this.getDashboardCount();
  }
  getDashboardCount(){
    this.admin.getDashBoardCount().subscribe((data:any) =>{
      this.usercount = data.usercount;
      this.requestcount = data.requestcount;
      this.purchasecount = data.purchasecount;
      this.feedcount = data.feecount;

    });
  }

}

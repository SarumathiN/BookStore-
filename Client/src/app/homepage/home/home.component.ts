import { Component,HostListener,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isShow: boolean = false;
  topPosToStartShowing = 100;
  isScrolled: boolean = false;

  @HostListener('window:scroll')
  checkScroll() {    
   const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    //console.log('[scroll]', scrollPosition);
    scrollPosition >= this.topPosToStartShowing ? (this.isShow = true) : (this.isShow = false);
    window.pageYOffset >= 80 ? (this.isScrolled = true) : (this.isScrolled = false);
  }   

  constructor(private _router: Router) { }

  ngOnInit() {
  }
 login(){
  this._router.navigate(['/registration/login']); 
 }  
 moveAbout(){
  let x = document.querySelector("#about");
  if (x){
      x.scrollIntoView({behavior: "smooth"});
  }
}
moveFeedback(){
  let x = document.querySelector("#feedback");
  if (x){
      x.scrollIntoView({behavior: "smooth"});
  }
}
gotoTop() {
  window.scroll({ 
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
  });
}
}

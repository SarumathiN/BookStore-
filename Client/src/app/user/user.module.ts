import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserLpageComponent } from './user-lpage/user-lpage.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [UserLpageComponent, BookdetailsComponent, CartComponent, CheckoutComponent, ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class UserModule { }

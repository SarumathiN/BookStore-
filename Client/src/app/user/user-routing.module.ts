import { NgModule } from '@angular/core';
import { SellModule } from '././sell/sell.module';

import { Routes, RouterModule } from '@angular/router';
import { UserLpageComponent } from './user-lpage/user-lpage.component';
import { BookdetailsComponent } from '././bookdetails/bookdetails.component';
import { CartComponent } from '././cart/cart.component';
import { CheckoutComponent } from '././checkout/checkout.component';
import { ProfileComponent } from '././profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'userhome', pathMatch: 'full' },
  { path: 'userhome', component: UserLpageComponent },
  { path: 'details', component: BookdetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'profile', component: ProfileComponent}, 
  { path: 'sell', loadChildren: () => import('src/app/user/sell/sell.module').then(m => m.SellModule) } 
];

@NgModule({
  imports: [RouterModule.forChild(routes),SellModule],
  exports: [RouterModule]
})
export class UserRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';
import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  declarations: [HomeComponent, AboutComponent, FeedbackComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class HomepageModule { }

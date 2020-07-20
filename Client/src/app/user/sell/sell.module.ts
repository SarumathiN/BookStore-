import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellRoutingModule } from './sell-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AddBooksComponent } from './add-books/add-books.component';
import { ViewBooksComponent } from './view-books/view-books.component';

@NgModule({
  declarations: [AddBooksComponent, ViewBooksComponent],
  imports: [
    CommonModule,
    SellRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class SellModule { }

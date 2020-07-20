import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { BooksComponent } from './books/books.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  declarations: [AdminComponent, BooksComponent, ViewbooksComponent, TransactionsComponent, FeedbackComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }

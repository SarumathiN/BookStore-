import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BooksComponent } from './../admin/books/books.component';
import { ViewbooksComponent} from './../admin/viewbooks/viewbooks.component';
import { TransactionsComponent }from './../admin/transactions/transactions.component';
import { FeedbackComponent } from './../admin/feedback/feedback.component';

const routes: Routes = [
  { path: '', component: AdminComponent,
  children: [
    { path: 'book', component: BooksComponent },
    { path: 'ordered_books', component: TransactionsComponent},
    { path: 'requsetd_books', component: ViewbooksComponent},
    { path: 'feedback', component: FeedbackComponent},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

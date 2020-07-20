import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddBooksComponent }from './../sell/add-books/add-books.component';
import {ViewBooksComponent } from './../sell/view-books/view-books.component';

const routes: Routes = [
  {path:'addBooks', component : AddBooksComponent},
  {path:'viewstatus', component : ViewBooksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellRoutingModule { }

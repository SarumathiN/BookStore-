import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftmenuComponent } from './layout/leftmenu/leftmenu.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SharedModule } from './shared/shared.module';

//import { NavbarComponent } from './common/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftmenuComponent,
    MainLayoutComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

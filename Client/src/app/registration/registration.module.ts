import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [RegistrationComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    FormsModule
  ]
})
export class RegistrationModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent} from './registration.component';

const routes: Routes = [
  {path: 'login', component:  RegistrationComponent },
  {path: '', redirectTo: 'login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }

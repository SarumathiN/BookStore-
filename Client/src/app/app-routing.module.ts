import { NgModule } from '@angular/core';
import { Routes, RouterModule,ExtraOptions } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};


const routes: Routes = [
  { path: 'home', loadChildren: () => import('src/app/homepage/homepage.module').then(m => m.HomepageModule) },
  { path: 'user', loadChildren: () => import('src/app/user/user.module').then(m => m.UserModule) },
  {
    path: 'bookstore', component: MainLayoutComponent,
    children: [
      { path: 'admin', loadChildren: () => import('src/app/admin/admin.module').then(m => m.AdminModule) }
    ]
  },  
  { path: 'registration', loadChildren: () => import('src/app/registration/registration.module').then(m => m.RegistrationModule) },
  { path: '' , redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

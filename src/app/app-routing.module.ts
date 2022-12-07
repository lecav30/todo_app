import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Created components
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

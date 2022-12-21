import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AppoinmentComponent } from './pages/appoinment/appoinment.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { HomeComponent } from './pages/home/home.component';
import { LawyerComponent } from './pages/lawyer/lawyer.component';
import { LoginComponent } from './pages/login/login.component';
import { ServicesComponent } from './pages/services/services.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "about", component: AboutComponent
  },
  {
    path: "Contact", component: ContactComponent
  },
  {
    path:"lawyer",component: LawyerComponent
},
{
  path:"appoinment",component: AppoinmentComponent
},
{
  path:"login",component: LoginComponent
},
{
  path:"signup", component:SignupComponent
},
{
  path:"forget-password", component:ForgetPasswordComponent
},
{
  path:"service",component:ServicesComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogniSignupComponent } from './components/logni-signup/logni-signup.component';
import { HomeComponent } from './components/home/home.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';

const routes: Routes = [
  {
    path:"home",
    component:LogniSignupComponent,
    pathMatch:'full'
  },
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"forgetpassword",
    component:ForgetpasswordComponent,
    pathMatch:"full"
  },
  {
    path:"resetpassword",
    component:ResetpasswordComponent,
    pathMatch:"full"
  },
  {
    path:"resetpassword/:email",
    component:ResetpasswordComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { UserComponent } from './user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegisterComponent } from './user-register/user-register.component';


const routes: Routes = [
  {
    path: "",
    component: UserComponent,
    children: [
      { path: "login", component: UserLoginComponent },
      { path: "profile", component: UserProfileComponent },
      { path: "register", component: UserRegisterComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

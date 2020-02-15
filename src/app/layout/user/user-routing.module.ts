import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { UserComponent } from './user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ProfileEditUserComponent } from './user-profile/profile-edit-user/profile-edit-user.component';
import { ProfileEditSystemComponent } from './user-profile/profile-edit-system/profile-edit-system.component';


const routes: Routes = [
  {
    path: "",
    component: UserComponent,
    children: [
      { path: "login", component: UserLoginComponent },
      { path: "profile", component: UserProfileComponent },
      { path: "register", component: UserRegisterComponent },
      { path: "profile-user", component: ProfileEditUserComponent},
      { path: "profile-system", component: ProfileEditSystemComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

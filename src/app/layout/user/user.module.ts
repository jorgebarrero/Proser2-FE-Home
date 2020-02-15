
// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

// Vendor

// Local
import { UserRoutingModule } from './user-routing.module';
import { HeaderModule } from 'src/app/header/header.module';

// Shared
import { AlertModule } from 'src/shared/modules';


// Components
import { UserComponent } from './user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileCardComponent } from './user-profile/profile-card/profile-card.component';
import { ProfileDetailComponent } from './user-profile/profile-detail/profile-detail.component';
import { ProfileListComponent } from './user-profile/profile-list/profile-list.component';
import { ProfileCardFieldComponent } from './user-profile/profile-card/profile-card-field/profile-card-field.component';
import { ProfileEditUserComponent } from './user-profile/profile-edit-user/profile-edit-user.component';
import { ProfileEditSystemComponent } from './user-profile/profile-edit-system/profile-edit-system.component';

// Services




@NgModule({
  declarations: [UserComponent, UserLoginComponent, UserRegisterComponent, UserProfileComponent, ProfileCardComponent, ProfileDetailComponent, ProfileListComponent, ProfileCardFieldComponent, ProfileEditUserComponent, ProfileEditSystemComponent],
  imports: [
    CommonModule,
    AlertModule,
    FormsModule,
    HeaderModule,
    UserRoutingModule
  ],
  providers: []
})
export class UserModule { }

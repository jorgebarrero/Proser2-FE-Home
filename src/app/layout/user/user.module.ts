
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

// Services




@NgModule({
  declarations: [UserComponent, UserLoginComponent, UserRegisterComponent, UserProfileComponent, ProfileCardComponent],
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

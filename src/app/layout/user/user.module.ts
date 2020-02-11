
// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

// Vendor

// Loclas
import { UserRoutingModule } from './user-routing.module';
import { HeaderModule } from 'src/app/header/header.module';


// Components
import { UserComponent } from './user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

// Services




@NgModule({
  declarations: [UserComponent, UserLoginComponent, UserRegisterComponent, UserProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    UserRoutingModule
  ],
  providers: []
})
export class UserModule { }

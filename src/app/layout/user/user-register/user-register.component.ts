// Angular
import { Component, OnInit } from '@angular/core';

// Services
import { UserService } from 'src/shared/services';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  currentUserName
  showMenuSections
  showMenuLogin

  constructor( private userService: UserService,) { 
    this.showMenuSections = true;
    this.showMenuLogin = true;
  }

  ngOnInit(): void {
    this.onGetcurrentUserName();
  }


  onGetcurrentUserName() {
    this.currentUserName = this.userService.getcurrentUserName().user.username;
    if(this.currentUserName === 'Invitado'){
      this.showMenuSections = false;
    } else {
      this.showMenuLogin = false;
    }
  }

}

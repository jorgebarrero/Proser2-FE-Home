// Angular
import { Component, OnInit } from "@angular/core";

// Services
import { UserService } from "src/shared/services";

@Component({
  selector: "app-user-register",
  templateUrl: "./user-register.component.html",
  styleUrls: ["./user-register.component.scss"]
})
export class UserRegisterComponent implements OnInit {
  currentUser;
  showMenus;

  constructor(private userService: UserService) {
    this.currentUser = {
      login: true,
      sections: true
    };
  }

  ngOnInit(): void {
    this.onGetcurrentUserName();
  }

  onGetcurrentUserName() {}
}

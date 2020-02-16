import { Component, OnInit, Input } from "@angular/core";

import {
  UserbaseModel,
  AlertModel,
  CurrentUserModel,
  HomeMenuModel
} from "src/shared/models";

import { UserService } from "src/shared/services";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  currentUser: CurrentUserModel;
  showMenus: HomeMenuModel;
  alertMessage: AlertModel;

  componentData: UserbaseModel;

  constructor(private userService: UserService) {
    this.alertMessage = new AlertModel();
    this.currentUser = new CurrentUserModel();
    this.showMenus = new HomeMenuModel();
  }

  ngOnInit(): void {
    this.getStoredUser();
  }

  getStoredUser() {
    let storedUser = this.userService.getStoredUser();
    storedUser.id != null ? (this.currentUser = storedUser) : "";
  }

  getShowMenus(event) {}

  onGetcurrentUserName() {
    this.currentUser = this.userService.getStoredUser();
    if (this.currentUser.id !== null) {
      this.showMenus = {
        sections: true,
        login: false
      };
    } else {
      this.showMenus = {
        sections: false,
        login: true
      };
      this.currentUser.user.username = "Invitado";
    }
  }
}

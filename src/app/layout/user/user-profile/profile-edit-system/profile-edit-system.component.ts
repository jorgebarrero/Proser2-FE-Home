// Angular
import { Component, OnInit } from "@angular/core";

// Models
import {
  UserbaseModel,
  AlertModel,
  CurrentUserModel,
  HomeMenuModel
} from "src/shared/models";

// Services
import { UserService } from "src/shared/services";

@Component({
  selector: "app-profile-edit-system",
  templateUrl: "./profile-edit-system.component.html",
  styleUrls: ["./profile-edit-system.component.scss"]
})
export class ProfileEditSystemComponent implements OnInit {
  componentData: UserbaseModel;

  currentUser: CurrentUserModel;
  showMenus: HomeMenuModel;
  alertMessage: AlertModel;

  constructor(private userService: UserService) {
    this.alertMessage = new AlertModel();
    this.showMenus = new HomeMenuModel();
    this.showMenus.login = false;
    this.currentUser = new CurrentUserModel();
  }

  ngOnInit(): void {
    this.getStoredUser();
  }

  getStoredUser() {
    let storedUser = this.userService.getStoredUser();
    if (storedUser.id != null) {
      this.currentUser = storedUser;
      this.componentData = storedUser.user;
    }
  }

  onComponentData(event) {
    this.componentData = event;
  }
}

import { AlertModel } from "./../../../shared/models/system/Alert";
// Angular
import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

// Vendor
import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource
} from "@ng-bootstrap/ng-bootstrap";

// Models
import { CurrentUserModel, HomeMenuModel } from "src/shared/models";

//Services
import { EnvService } from "src/shared/services";
import { UserService } from "src/shared/services/user.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  // Identification
  title;
  version;
  clientLogo;
  clientSite;
  externalAssets;
  env;

  logo;
  img_01;
  img_02;
  img_03;
  img_04;

  currentUser: CurrentUserModel;
  showMenus: HomeMenuModel;
  alertMessage: AlertModel;

  constructor(
    private userService: UserService,
    private envService: EnvService,
    private router: Router
  ) {
    this.env = this.envService;
    this.title = "Bienvenidos a ProSer";
    this.externalAssets = this.env.externalAssets;
    this.clientLogo = `${this.externalAssets}/img/logos_client/client-logo.png`;
    this.showMenus = new HomeMenuModel();
    this.alertMessage = new AlertModel();
    this.onGetcurrentUserName();
  }

  ngOnInit() {
    this.logo = `${this.externalAssets}/img/logos_client/client-logo.png`;
    this.img_01 = `${this.externalAssets}/img/intro/portada-01.jpg`;
    this.img_02 = `${this.externalAssets}/img/intro/portada-02.jpg`;
    this.img_03 = `${this.externalAssets}/img/intro/portada-03.jpg`;
    this.img_04 = `${this.externalAssets}/img/intro/portada-04.jpg`;
  }

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

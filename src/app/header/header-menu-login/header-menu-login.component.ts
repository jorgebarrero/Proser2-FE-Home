// Angular
import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

// Vendor
import {
  faCoffee,
  faChartArea,
  faDigitalTachograph,
  faSignInAlt,
  faUser
} from "@fortawesome/free-solid-svg-icons";

// Services
import { EnvService, UserService } from "src/shared/services";

@Component({
  selector: "app-header-menu-login",
  templateUrl: "./header-menu-login.component.html",
  styleUrls: ["./header-menu-login.component.scss"]
})
export class HeaderMenuLoginComponent implements OnInit {
  faCoffee = faCoffee;
  faChartArea = faChartArea;
  faDigitalTachograph = faDigitalTachograph;
  faSignInAlt = faSignInAlt;
  faUser = faUser;

  env;
  constructor(
    private userService: UserService,
    private router: Router,
    private envService: EnvService
  ) {
    this.env = this.envService;
  }

  ngOnInit() {}
}

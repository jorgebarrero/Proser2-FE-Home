// Angular
import { Component, OnInit, Input } from "@angular/core";

// Vendor
import {
  faCoffee,
  faChartArea,
  faDigitalTachograph,
  faSignInAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

// Services
import { EnvService } from "src/shared/services";

@Component({
  selector: 'app-header-menu-login',
  templateUrl: './header-menu-login.component.html',
  styleUrls: ['./header-menu-login.component.scss']
})
export class HeaderMenuLoginComponent implements OnInit {
  @Input() showInMenu;
  @Input() currentUser;

  faCoffee = faCoffee;
  faChartArea = faChartArea;
  faDigitalTachograph = faDigitalTachograph;
  faSignInAlt = faSignInAlt;
  faUser = faUser;

  env;
  constructor(private envService: EnvService) {
    this.env = this.envService;
  }

  ngOnInit() { }
}

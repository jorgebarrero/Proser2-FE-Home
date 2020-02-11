// Angular
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

// Services
import { EnvService } from "src/shared/services";


EnvService

@Component({
  selector: 'app-header-brand',
  templateUrl: './header-brand.component.html',
  styleUrls: ['./header-brand.component.scss']
})
export class HeaderBrandComponent implements OnInit {
  env;
  externalAssets;
  proserLogo;

  constructor(private router: Router, private envService: EnvService) {
    this.env = this.envService;
    this.externalAssets = this.env.externalAssets
    this.proserLogo = `${this.externalAssets}/img/logos_proser/proser-logo-xsm.png`
  }

  ngOnInit() {

  }

  onBrand() {
    // this.router.navigate(["/"]);
    this.router.navigate([`${this.env.host}`]);
  }
}

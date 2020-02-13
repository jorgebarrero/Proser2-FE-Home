// Angular
import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

// Vendor
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

//Services
import { EnvService } from "src/shared/services";
import { UserService } from 'src/shared/services/user.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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

  currentUserName
  showMenuLogin
  showMenuSections

  constructor(
    private userService: UserService,
    private envService: EnvService,
    private router: Router
  ) {
    this.env = this.envService
    this.title = "Bienvenidos a ProSer"
    this.version = "1.0.0"
    this.externalAssets = this.env.externalAssets
    this.clientLogo = `${this.externalAssets}/img/logos_client/client-logo.png`;
    this.showMenuLogin = true;
    this.showMenuSections = true;
    this.currentUserName = 'New'
    this.onGetcurrentUserName();
  }

  ngOnInit() {
    this.logo = `${this.externalAssets}/img/logos_client/client-logo.png`
    this.img_01 = `${this.externalAssets}/img/intro/portada-01.jpg`;
    this.img_02 = `${this.externalAssets}/img/intro/portada-02.jpg`;
    this.img_03 = `${this.externalAssets}/img/intro/portada-03.jpg`;
    this.img_04 = `${this.externalAssets}/img/intro/portada-04.jpg`;

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

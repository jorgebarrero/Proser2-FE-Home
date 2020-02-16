// Angular
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import {
  UserbaseModel,
  AlertModel,
  CurrentUserModel,
  HomeMenuModel
} from "src/shared/models";

// Services
import { ToastrService } from "ngx-toastr";
import { UserService } from "src/shared/services";

@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.scss"]
})
export class UserLoginComponent implements OnInit {
  model: UserbaseModel;
  componentData: UserbaseModel = new UserbaseModel();

  currentUser: CurrentUserModel;
  showMenus: HomeMenuModel;
  alertMessage: AlertModel;

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.model = new UserbaseModel();
    this.alertMessage = new AlertModel();
    this.currentUser = new CurrentUserModel();
  }

  ngOnInit() {
    this.showSuccess();
    this.resetForm();
    this.onShowMenus();
  }

  getRecord(form: NgForm) {
    this.userService.loginUser(form).subscribe(
      res => {
        let result = res;
        console.log("type", res.user);
        this.currentUser = res;
        this.userService.setUser(res);
        this.userService.setToken(res.id);
        this.router.navigate(["/"]);
        this.toastr.success("Bienvenido", this.currentUser.user.username);
        this.resetForm();
      },
      error => {
        console.log("ERROR in LIST");
        this.alertMessage.alertShow = true;
        this.alertMessage.alertTitle = "Error del servidor";
        this.alertMessage.alertText = "No se consigue este usuario";
        this.alertMessage.alertType = "danger";
        console.log("this.alertMessage", this.alertMessage);
      }
    );
  }

  showSuccess() {
    //  this.toastr.success('Hello world!', 'Toastr fun!');
    this.userService.ping().subscribe(
      res => {},
      error => {
        console.log("ERROR in LIST");
        this.alertMessage.alertShow = true;
        this.alertMessage.alertTitle = "Error del servidor";
        this.alertMessage.alertText = "No se puede conectar al servidor";
        this.alertMessage.alertType = "danger";
        console.log("this.alertMessage", this.alertMessage);
      }
    );
  }

  onShowMenus() {
    this.showMenus = { sections: false, login: true };
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.componentData = {
      id: "",
      firstname: "",
      lastname: "",
      profile: "",
      realm: "",
      username: " ",
      password: "",
      email: "",
      emailVerified: "",
      verificationToken: "",
      memberId: "",
      user_legal_id: "",
      user_internal_id: "",
      user_photo_path: ""
    };
  }

  onSubmit(form: NgForm) {
    this.getRecord(form.value);
    this.resetForm();
  }

  onGoHome() {
    console.log("go home");
    this.router.navigate(["/"]);
  }
}

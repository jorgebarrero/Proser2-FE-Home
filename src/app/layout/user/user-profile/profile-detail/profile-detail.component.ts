// Angular
import { Component, OnInit, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { UserbaseModel, AlertModel } from "src/shared/models";

// Services
import { ToastrService } from "ngx-toastr";
import { UserService } from "src/shared/services";

@Component({
  selector: "app-profile-detail",
  templateUrl: "./profile-detail.component.html",
  styleUrls: ["./profile-detail.component.scss"]
})
export class ProfileDetailComponent implements OnInit {
  @Input() componentData;
  form;

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {
    // this.form = NgForm;
  }

  ngOnInit(): void {}

  onChange() {
    this.userService.serviceData = this.componentData;
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
    // this.userService.serviceData = this.componentData;
  }

  onSubmit(form: NgForm) {
    console.log("Profile form", form.value);
  }
}

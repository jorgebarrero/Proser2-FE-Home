// Angular
import { Component, OnInit, Input } from "@angular/core";
import { NgForm, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { UserbaseModel, AlertModel } from "src/shared/models";

// Services
import { ToastrService } from "ngx-toastr";
import { UserService } from "src/shared/services";

@Component({
  selector: "app-profile-detail-reactive",
  templateUrl: "./profile-detail-reactive.component.html",
  styleUrls: ["./profile-detail-reactive.component.scss"]
})
export class ProfileDetailReactiveComponent implements OnInit {
  @Input() componentData;

  rForm: FormGroup;
  post: any;
  titleAlert;
  name;

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.rForm = fb.group({
      name: [null, Validators.required],
      id: [null, Validators.required],
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      profile: [null, Validators.required],
      realm: [null, Validators.required],
      username: [null, Validators.required],
      password: [null, Validators.required],
      email: [null, Validators.required],
      emailVerified: [null, Validators.required],
      verificationToken: [null, Validators.required],
      memberId: [1, Validators.required],
      user_legal_id: [null, Validators.required],
      user_internal_id: [null, Validators.required],
      user_photo_path: [null, Validators.required],
      validate: [1, Validators.required]
    });
  }

  ngOnInit(): void {
    this.rForm.get("validate").valueChanges.subscribe(validate => {
      if (validate == "1") {
        this.rForm
          .get("name")
          .setValidators([Validators.required, Validators.minLength(3)]);
        this.titleAlert = "You neeed to specify at least 3 characters";
      } else {
        this.rForm.get("name").setValidators([Validators.required]);
      }
      this.rForm.get("name").updateValueAndValidity();
    });
  }

  addPost(post) {
    // this.description = post.description;
    // this.name = post.name;
  }

  log(event) {
    console.log("event", event);
  }

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

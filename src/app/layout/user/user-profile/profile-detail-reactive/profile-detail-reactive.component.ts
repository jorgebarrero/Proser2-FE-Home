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
  record;

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.resetForm();
  }

  addPost(post) {
    console.log("componentData", this.componentData);
    // this.description = post.description;
    // this.name = post.name;
  }

  editRegister() {}

  newRegister() {}

  log(form) {
    console.log("Form", form);
  }

  resetForm() {
    this.rForm = this.fb.group({
      // Id
      id: [this.componentData.id, Validators.required],
      // Mandatory
      username: [
        { value: this.componentData.username, disabled: true },
        Validators.required
      ],
      email: [this.componentData.email, Validators.required],
      firstname: [this.componentData.firstname, Validators.required],
      lastname: [this.componentData.lastname, Validators.required],
      // Type
      profile: [
        { value: this.componentData.profile, disabled: true },
        Validators.required
      ],
      memberId: [this.componentData.memberId],
      // Optional
      user_legal_id: [this.componentData.user_legal_id],
      user_internal_id: [this.componentData.user_internal_id],
      // Secret
      password: [null],
      checkPassword: [null],
      // Auto
      realm: [this.componentData.realm],
      emailVerified: [this.componentData.emailVerified],
      verificationToken: [this.componentData.verificationToken],

      user_photo_path: [this.componentData.user_photo_path]
    });
  }

  returnForm() {
    console.log("ole");

    this.record = !this.record;
  }

  onSubmit(form: NgForm) {
    // console.log("Profile form", form.value);
    this.record = true;
  }

  _markFormPristine(form: FormGroup | NgForm): void {
    Object.keys(form.controls).forEach(control => {
      form.controls[control].markAsPristine();
    });
    console.log("form", form);
  }

  /**OPTIONAL**************************** */

  dinamicChanges() {
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
}

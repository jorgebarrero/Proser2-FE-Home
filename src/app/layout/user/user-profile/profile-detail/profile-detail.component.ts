// Angular
import { Component, OnInit, Input } from "@angular/core";
import { NgForm, FormGroup, FormBuilder, Validators } from "@angular/forms";
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

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}
}

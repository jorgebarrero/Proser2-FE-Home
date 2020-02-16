// Angular
import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

// Services
import { UserService } from "src/shared/services";

@Component({
  selector: "app-header-user",
  templateUrl: "./header-user.component.html",
  styleUrls: ["./header-user.component.scss"]
})
export class HeaderUserComponent implements OnInit {
  @Input() currentUser;
  @Input() showMenus;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onLogout() {
    this.userService.logoutUser().subscribe(res => {
      this.router.navigate(["/layout/user/login"]);
    });
  }
}

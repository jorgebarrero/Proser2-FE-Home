import { Component, OnInit, Input } from "@angular/core";

import { AlertModel, CurrentUserModel, HomeMenuModel } from "src/shared/models";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Input() currentUser;
  @Input() showMenus;
  @Input() alertMessage;

  public isMenuCollapsed = true;

  constructor() {}

  ngOnInit() {}
}

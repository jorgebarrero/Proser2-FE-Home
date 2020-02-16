// Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Vendor
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { CollapseModule } from "ngx-bootstrap/collapse";

// Locals
import { HeaderRoutingModule } from "./header-routing.module";
import { AlertModule } from "src/shared/modules";

// Components
import { HeaderComponent } from "./header.component";
import { HeaderBrandComponent } from "./header-brand/header-brand.component";
import { HeaderUserComponent } from "./header-user/header-user.component";
import { HeaderMenuLoginComponent } from "./header-menu-login/header-menu-login.component";
import { HeaderMenuSectionsComponent } from "./header-menu-sections/header-menu-sections.component";
import { HeaderConnectionComponent } from "./header-connection/header-connection.component";
import { HeaderTimeComponent } from "./header-time/header-time.component";
import { HeaderSectionNameComponent } from "./header-section-name/header-section-name.component";

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderBrandComponent,
    HeaderUserComponent,
    HeaderMenuLoginComponent,
    HeaderMenuSectionsComponent,
    HeaderConnectionComponent,
    HeaderTimeComponent,
    HeaderSectionNameComponent
  ],
  imports: [
    CommonModule,
    // Vendor
    BsDropdownModule,
    CollapseModule,
    FontAwesomeModule,
    NgbModule,
    // Locals
    AlertModule,
    HeaderRoutingModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {}

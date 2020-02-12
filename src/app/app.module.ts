// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


// Vendor
import { ToastrModule } from 'ngx-toastr';

// Local
import { HeaderModule } from './header/header.module';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeCardComponent } from './pages/home/home-card/home-card.component';
import { HomeSubheaderComponent } from './pages/home/home-subheader/home-subheader.component';
import { HomeClientLogoComponent } from './pages/home/home-client-logo/home-client-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HomeCardComponent,
    HomeSubheaderComponent,
    HomeClientLogoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    HeaderModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        component: HomeComponent
      },

      {
        path: "layout",
        loadChildren: () =>
          import("./layout/layout.module").then(m => m.LayoutModule)
      }
    ]
  },

  { path: "not-found", component: NotFoundComponent },
  // NAVIGATE TO NOT FOUND PAGE
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*


const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        component: HomeComponent
      },

      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "bye",
        component: ByeComponent
      },

      {
        path: "register",
        component: RegisterComponent
      },

      {
        path: "profile",
        component: ProfileComponent
      },


      {
        path: "layout",
        loadChildren: () =>
          import("./layout/layout.module").then(m => m.LayoutModule)
      }
    ]
  },

  { path: "not-found", component: NotfoundComponent },
  // NAVIGATE TO NOT FOUND PAGE
  { path: "**", redirectTo: "not-found" }
];
*/
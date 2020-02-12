
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";


// Vendor
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { isNullOrUndefined } from "util";

import { EnvService } from "./env.service";

import { Router } from "@angular/router";
import {
  RoleMappingModel,
  UserbaseModel,
  currentUserModel
} from "src/shared/models";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(
    private http: HttpClient,
    private env: EnvService,
    private router: Router,
    ) { }
    
  readonly rootURL = `http://localhost:3151`

  headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json');

  private handleError(error: any) {
    console.error('CATCHED ON SERVICE...', error);
    return throwError(error);
  }

  // Test connection
  ping() {
    let url_api = `${this.rootURL}/ping`;
    let result = this.http.get(url_api).pipe(map(data => data))
    return result
  }

  // Login user
  loginUser(user) {
    const url_api = `${this.env.loopbackApiUrl}/api/Userbases/login?include=user`;
    return this.http
      .post<currentUserModel>(
        url_api,
        user,
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }

  // logout from backend
  logoutUser() {
    const accessToken = localStorage.getItem("accessToken");
    const url_api = `${this.env.loopbackApiUrl}/api/userbases/logout?access_token=${accessToken}`;
    localStorage.clear();
    console.clear();
    return this.http.post<UserbaseModel>(url_api, { headers: this.headers });
  }

  // Register User in Database
  registerUser(user) {
    const url_api = `${this.env.loopbackApiUrl}/api/userbases`;
    return this.http
      .post<UserbaseModel>(url_api, user, { headers: this.headers })
      .pipe(map(data => data));
  }

  // Register Role to user
  registerRoleMapping(user: UserbaseModel) {
    let roleMapping = {
      principalType: "USER",
      principalId: user.id,
      roleId: 4
    };

    const url_api = `${this.env.loopbackApiUrl}/api/RoleMappings`;
    return this.http
      .post<RoleMappingModel>(url_api, roleMapping, { headers: this.headers })
      .pipe(map(data => data));
  }

  // List all users
  getAllUsers() {
    const accessToken = localStorage.getItem("accessToken");
    const url_api = `${this.env.loopbackApiUrl}/api/userbases?access_token=${accessToken}`;
    return this.http
      .get<UserbaseModel>(url_api, { headers: this.headers })
      .pipe(map(data => data));
  }

  // Check in database if user exists
  checkIfExists(user) {
    const accessToken = localStorage.getItem("accessToken");
    const url_api = `${this.env.loopbackApiUrl}/api/Userbases/checkIfExists`;

    return this.http
      .post<any>(url_api, user, { headers: this.headers })
      .pipe(map(data => data));
  }

  // Check if access token is present in local store
  isAuthenticated(): boolean {
    let result = false;
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      result = true;
    }

    return result;
  }


  /* SETTERS ****************** */

  // Record user in local store
  setUser(user: currentUserModel) {
    const userString = JSON.stringify(user);
    localStorage.setItem("currentUserName", userString);
  }

  // Record token in local store
  setToken(token) {
    localStorage.setItem("accessToken", token);

  }

  /* GETTERS****************** */

  // Read token from local_store
  getToken() {
    return localStorage.getItem("accessToken");
  }

  // Read user from local_store
  getcurrentUserName(): currentUserModel {
    let currentUserName = new currentUserModel();
    currentUserName.user.username = 'Invitado'
    const userString = localStorage.getItem("currentUserName");
    if (!isNullOrUndefined(userString)) {
      const user: currentUserModel = JSON.parse(userString);
      return user;
    } else {
      return currentUserName;
    }
  }

  // Read user value from local_store
  getcurrentUserNameValue() {
    let result = 0;
    const userString = localStorage.getItem("currentUserName");
    if (!isNullOrUndefined(userString)) {
      const user: UserbaseModel = JSON.parse(userString);
      user.profile === "develop" ? (result = 20) : "";
      user.profile === "admin" ? (result = 10) : "";
      user.profile === "system" ? (result = 7) : "";
      user.profile === "config" ? (result = 5) : "";
      user.profile === "user" ? (result = 1) : "";
      user.profile === "guest" ? (result = 0) : "";
      return result;
    } else {
      return 0;
    }
  }
}


// Angular
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserbaseModel, AlertModel, CurrentUserModel } from 'src/shared/models';


// Services
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/shared/services';

@Component({
  selector: 'app-profile-edit-user',
  templateUrl: './profile-edit-user.component.html',
  styleUrls: ['./profile-edit-user.component.scss']
})
export class ProfileEditUserComponent implements OnInit {

  currentUser
  currentUserName: string;
  currentUserRecord: CurrentUserModel;

  showMenuSections
  showMenuLogin

  model: UserbaseModel;
  alertMessage: AlertModel; 

  componentData: UserbaseModel;

  user: UserbaseModel;

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) { 
    this.showMenuSections = true;
    this.showMenuLogin = true;
    this.model = new UserbaseModel();
    this.alertMessage = new AlertModel();
    this.currentUserRecord = new CurrentUserModel();
    this.onGetcurrentUserName();
    this.getStoredUser();
  }

  ngOnInit() {
    this.showSuccess();
    this.resetForm();
  }

  getStoredUser(){
    let storedUser = this.userService.getStoredUser()
    this.getRecord(storedUser.user.id)
    console.log(storedUser)
  }


  getRecord(id) {
    this.userService.getSingleUser(id).subscribe( res  => {
      let result = res
      this.userService.serviceData = res
      this.componentData = res
      
      console.log('RES', res);
    }, error => {
      console.log('ERROR in LIST');
      this.alertMessage.alertShow = true;
      this.alertMessage.alertTitle = 'Error del servidor'
      this.alertMessage.alertText = 'No se consigue este usuario'
      this.alertMessage.alertType = 'danger'
      console.log('this.alertMessage', this.alertMessage);

    });
  }

  showSuccess() {
    //  this.toastr.success('Hello world!', 'Toastr fun!');
     this.userService.ping().subscribe( res => {
     }, error => {
      console.log('ERROR in LIST');
      this.alertMessage.alertShow = true;
      this.alertMessage.alertTitle = 'Error del servidor'
      this.alertMessage.alertText = 'No se puede conectar al servidor'
      this.alertMessage.alertType = 'danger'
      console.log('this.alertMessage', this.alertMessage);

    })
  }


  onSubmit(form: NgForm) {
      this.getRecord(form.value);
      this.resetForm();
  }

  onGoHome(){
    console.log('go home');
    this.router.navigate(["/"]);
  }

  onGetcurrentUserName() {
    this.currentUser = this.userService.getcurrentUserName().user;
    this.currentUserName = this.userService.getcurrentUserName().user.username;
    if(this.currentUserName === 'Invitado'){
      this.showMenuSections = false;
    } else {
      this.showMenuLogin = false;
    }
  }

}

// Angular
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserbaseModel, AlertModel, currentUserModel } from 'src/shared/models';


// Services
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/shared/services';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {


  currentUser
  showMenuSections
  showMenuLogin

  model: UserbaseModel;

  alertMessage: AlertModel; 

  serviceData: UserbaseModel = new UserbaseModel();

  currentUserRecord: currentUserModel;
  currentUserName: string;

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) { 
    this.showMenuSections = true;
    this.showMenuLogin = true;
    this.model = new UserbaseModel();
    this.alertMessage = new AlertModel();
    this.currentUserRecord = new currentUserModel();
    this.onGetcurrentUserName();
  }

  ngOnInit() {
    this.showSuccess();
    this.resetForm();
  }


  getRecord(form: NgForm) {
    this.userService.loginUser(form).subscribe( res  => {
      let result = res
      console.log('type', res.user.username);
      this.currentUserName = res.user.username;
      this.userService.setUser(res);
      this.userService.setToken(res.id);
      this.router.navigate(["/"]);
      this.toastr.success('Bienvenido', this.currentUserName)
      this.resetForm();
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

  
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.serviceData = {
      id: '',
      firstname: '',
      lastname: '',
      profile: '',
      realm: '',
      username: ' ',
      password: '',
      email: '',
      emailVerified: '',
      verificationToken: '',
      memberId: '',
      user_legal_id: '',
      user_internal_id: '',
      user_photo_path: '',
    }
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

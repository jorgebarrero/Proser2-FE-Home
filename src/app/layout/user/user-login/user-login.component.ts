

// Angular
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// Services
import { ToastrService } from 'ngx-toastr';

import { UserbaseModel } from 'src/shared/models';
import { UserService } from 'src/shared/services';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  model: UserbaseModel;
  message:UserbaseModel;

  serviceData: UserbaseModel = new UserbaseModel();
  serviceList: UserbaseModel[];
  // serviceFullList: UserbaseModel= [new UserbaseModel()];

  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) { 

    this.model = new UserbaseModel();
  }

  ngOnInit() {
    this.showSuccess();
    this.resetForm();
  }


  showSuccess() {
    //  this.toastr.success('Hello world!', 'Toastr fun!');
     this.userService.ping().subscribe( res => {
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
      username: '',
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

  getRecord(form: NgForm) {
    this.userService.loginUser(form).subscribe(res => {
      this.toastr.success('Inserted successfully', 'Employee Register')
      let result = res
      console.log('result', res);
      
      this.resetForm();
    });
  }



}

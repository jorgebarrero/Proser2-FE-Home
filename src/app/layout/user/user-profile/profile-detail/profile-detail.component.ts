import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from 'src/shared/services';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {

  @Input() componentData;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  onChange() {
    this.userService.serviceData = this.componentData
  }

  onSubmit(form: NgForm) {
    console.log('Profile form', form.value);
    
  }

}

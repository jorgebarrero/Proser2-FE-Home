import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-profile-card-field',
  templateUrl: './profile-card-field.component.html',
  styleUrls: ['./profile-card-field.component.scss']
})
export class ProfileCardFieldComponent implements OnInit {

  @Input() label;
  @Input() text;

  constructor() { }

  ngOnInit(): void {
  }

}

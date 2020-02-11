import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-client-logo',
  templateUrl: './home-client-logo.component.html',
  styleUrls: ['./home-client-logo.component.scss']
})
export class HomeClientLogoComponent implements OnInit {

  @Input() clientLogo;
  @Input() env;

  constructor() { }

  ngOnInit(): void {
  }

}

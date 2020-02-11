import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-subheader',
  templateUrl: './home-subheader.component.html',
  styleUrls: ['./home-subheader.component.scss']
})
export class HomeSubheaderComponent implements OnInit {

  @Input() env;
  @Input() title;
  @Input() version;
  @Input() clientLogo;

  constructor() { }

  ngOnInit(): void {
  }

}

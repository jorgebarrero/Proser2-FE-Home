import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-header-section-name',
  templateUrl: './header-section-name.component.html',
  styleUrls: ['./header-section-name.component.scss']
})
export class HeaderSectionNameComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}

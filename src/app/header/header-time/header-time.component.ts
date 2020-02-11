import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-header-time',
  templateUrl: './header-time.component.html',
  styleUrls: ['./header-time.component.scss']
})
export class HeaderTimeComponent implements OnInit {

  options = {
    timeStyle: 'medium',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };


  time = new Observable<string>(
    (observer: Subscriber<string>) => {
    setInterval(() => observer
      .next(new Date().toLocaleDateString('es-US', this.options)), 1000);

  });

  constructor() { }

  ngOnInit() {
  }


  }

import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';

@Component({
  selector: 'app-header-connection',
  templateUrl: './header-connection.component.html',
  styleUrls: ['./header-connection.component.scss']
})
export class HeaderConnectionComponent implements OnInit {

  constructor(
    private connectionService: ConnectionService
  ) {
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.status = 'ONLINE';
      } else {
        this.status = 'OFFLINE';
      }
    });
  }

  status = 'ONLINE';
  isConnected = true;


  ngOnInit() {
  }

}

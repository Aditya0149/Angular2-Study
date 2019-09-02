import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service.ts';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {
  msg_to_send = "";
  msg_from_home_component= "";
  constructor(public logger : LoggerService) {
    this.logger.log("HomeComponent constructor");
    this.logger.msgForHomeObservable.subscribe(
      msg => this.msg_from_home_component = msg
    );
  }

  ngOnInit() {
    this.logger.log("StyleComponent init");

  }

}

import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { LoggerService } from './logger.service';


@Component({
  selector: 'logger',
  template: '<div *ngFor="let msg of msgs">{{msg}}</div>',
  styleUrls: ['./app.component.css']
})
export class LoggerComponent {
  msgs = [];
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  links = [];
  constructor(public logger:LoggerService){}
  ngOnInit(){
    this.links = [
      {label:"Home",path:"/"},
      {label:"Dynamic comps",path:"/dynamic"},
      {label:"Http",path:"/myhttp"},
      {label:"Styles",path:"/style"}
    ]
  }

}

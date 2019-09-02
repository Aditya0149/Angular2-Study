import { Component, ViewChild, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'child-comp',
  template: '<div [style.color]="_color" (click)="raiseEvent()">Child Component </div><button (click)="inc()">+</button><button (click)="dec()">--</button>',
  styleUrls: ['./home.component.css'],
  providers: [] // if service instace has to be create for this component only

})
export class ChildComponent {
  //private fontsize;
  public _color;
  public @Input("size") fontsize;  // used to take data from parent
  @Input()
  set color(color:string){
    this._color = color;
  };
  @Output() customEvent = new EventEmitter<string>(); // used to send data to parent
  @Output() sizeChange = new EventEmitter<number>(); // append Change to the input value and emmit this event for two way binding
  constructor(){};
  raiseEvent():void{
    this.customEvent.emit("event");
  };
  inc():void{
    this.fontsize++;
    this.sizeChange.emit(this.fontsize);
  }
  dec():void{
    this.fontsize--;
    this.sizeChange.emit(this.fontsize);
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [] // if service instace has to be create for this component only
})
export class HomeComponent implements OnInit {
  compContext:string = "component context";
  disableButon = true;
  buttonName = "Enable Button";
  fontSize:number = 16;
  color:string = "#000";
  fsize = 16;
  msg_to_send = "";
  msg_from_style_component = "";
  @ViewChild(ChildComponent) child : ChildComponent;
  constructor(public logger : LoggerService) {
    this.logger.log("HomeComponent constructor");
  };

  ngOnInit() {
    this.logger.log("HomeComponent init");

  };

  ngAfterViewInit(){
    console.log(this.child.fontsize);
  }
  ngAfterViewChecked(){
    console.log("after view checked : ",this.child._color); // after the views doCheck()

    if(this.fsize !== this.child.fontsize){ // Neccessary, otherwise angular will call doCheck continuesly
      this.tick_then(() => this.fsize = this.child.fontsize); // tick is Neccessary because abgular dont alow change in view aftew view is checked
          // this only happens if the variable is used in a view/template
    }
  }
  tick_then(fun):void{
    setTimeout(fun,0);
  }
  sendMsg(msg):void{
    this.logger.sendMsgToStyle(msg);
  }
  toggleButton():void{
    if (this.disableButon) {
      this.disableButon = false;
      this.buttonName = "Disable Button";
    } else {
      this.disableButon = true;
      this.buttonName = "Enable Button";
    }
  }
  fun(ev):void{
    console.log("Log", this.child.fontsize);
  }

}

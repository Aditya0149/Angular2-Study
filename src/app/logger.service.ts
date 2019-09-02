import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root' // this service will create an instace for all ngModules
})
export class LoggerService {
  public backgroundColor:string = "#fff";
  public logText = "";
  private msgForHome = new Subject<string>();
  private msgForStyle = new Subject<string>();
  msgForHomeObservable = this.msgForHome.asObservable();
  msgForStyleObservable = this.msgForStyle.asObservable();
  constructor() { }
  ngOnInit(){

  }
  public log(log:string):void {
    console.log(log);
    this.logText = log;
  }
  public sendMsgToHome(msg){
    this.msgForHome.next(msg);
  }
  public sendMsgToStyle(msg){
    this.msgForStyle.next(msg);
  }

}

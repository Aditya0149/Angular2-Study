import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild, EventEmitter, Output } from '@angular/core';
import { SelectHostDirective } from "../select-host.directive";

@Component({
  selector: 'app-dynamic-host',
  templateUrl: './dynamic-host.component.html',
  styleUrls: ['./dynamic-host.component.css']
})
export class DynamicHostComponent implements OnInit {
  @ViewChild(SelectHostDirective) host : SelectHostDirective;
  constructor(private componentFactoryResolver : ComponentFactoryResolver ) { }
  eleNo = 0;
  public elements = [
    {component:InputComponent,data:1},
    {component:InputComponent,data:2},
    {component:SelectComponent,data:3},
    {component:SelectComponent,data:4}
  ];
  public table = {
    headings : ["id","name","profession"],
    rows : [{"id":1,"name":"Santa","profession":"Old Jokes"},{"id":2,"name":"Banta","profession":"New Jokes"}]
  }
  public namesList = ["Saurya", "Parshya", "CoolKarni"];
  public name = "Parshya";
  hide = false;
  addComponent() {
    let factory = this.componentFactoryResolver.resolveComponentFactory(this.elements[this.eleNo].component);
    let viewContainerRef = this.host.viewContainerRef;
    let compRef = viewContainerRef.createComponent(factory);
    compRef.instance.value = this.elements[this.eleNo].data;
    this.eleNo = ( this.eleNo + 1 ) % this.elements.length;
  }
}

@Component({
  template: '<br/><br/>Value is &nbsp;&nbsp;<input [(ngModel)]="value"><br/><br/>',
})
export class InputComponent implements OnInit {
  value = 0;
}

@Component({
  template: '<br/><br/>Value is &nbsp;&nbsp;<select [(ngModel)]="value"><option>{{value}}</option><option>1</option><option>2</option></select><br/><br/>',
})
export class SelectComponent implements OnInit {
  value = 0;
}

import { Directive, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appSelectHost]'
})
export class SelectHostDirective {
  @Input("appSelectHost") elements;
  constructor(public viewContainerRef : ViewContainerRef) { }
}

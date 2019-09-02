import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyTable]'
})
export class MyTableDirective {
  @Input ("appMyTableThead") headings;
  @Input ("appMyTableTbody") rows;
  constructor(private templateRef:TemplateRef,private viewContainerRef:ViewContainerRef) {

  }
  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
}

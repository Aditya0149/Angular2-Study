import { Directive, TemplateRef, ViewContainerRef, Input, ElementRef, HostListener, OnInit, OnChanges  } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input("appUnlessOf") name;
  @Input("appUnlessFrom") nameList;
  constructor(private template : TemplateRef , private viewContainerRef: ViewContainerRef) { }
  ngOnInit() {

  }
  ngOnChanges(changes) {
    if (changes.name) {
        if(this.nameList.includes(this.name)) this.viewContainerRef.createEmbeddedView(this.template,{$implicit:this.nameList.indexOf(this.name)})
        else this.viewContainerRef.clear();
    }

  }
}

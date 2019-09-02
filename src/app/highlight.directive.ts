import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el : ElementRef) {  console.log(this.el)}
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = "#0f0"
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }
  @HostListener('click') onClick() {
    this.el.nativeElement.textContent = "DIV";
  }
}

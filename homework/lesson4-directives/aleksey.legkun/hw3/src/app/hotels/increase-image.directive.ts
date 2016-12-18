import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';


@Directive({
  selector: '[appIncreaseImage]'
})
export class IncreaseImageDirective {
   
  constructor(private elementRef: ElementRef) { }

 @HostBinding('style.max-height') imageHeight;
 @HostBinding('style.max-width') imageWidth;
 @HostBinding('style.object-fit') imageObjectFit;

 @HostListener('mouseenter', ['$event']) onMouseEnter(event: MouseEvent) {
     this.imageWidth = "200%";
     this.imageObjectFit ="cover"; 
  }

 @HostListener('mouseleave', ['$event']) onMouseLeave(event: MouseEvent) {
     this.imageWidth = "";
     this.imageObjectFit =""; 
  }
}

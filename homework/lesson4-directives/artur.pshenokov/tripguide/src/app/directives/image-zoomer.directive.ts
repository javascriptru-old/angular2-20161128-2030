import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appImageZoomer]'
})
export class ImageZoomerDirective {

  @HostBinding('class.zoom') zoomClass = false;

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent) {
    this.zoomClass = true;
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    this.zoomClass = false;
  }

}

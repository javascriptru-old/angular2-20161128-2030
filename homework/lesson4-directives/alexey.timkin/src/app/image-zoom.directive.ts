import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[image-zoom]'
})
export class ImageZoomDirective {

  constructor(el: ElementRef) {
//    el.nativeElement.style
  }
  @HostBinding('style.width') width;
  @HostBinding('style.height') height;
  @HostBinding('style.max-width') maxWidth;
  private originalWidth: string;
  private originalHeight: string;
  private originalMaxWidth: string;

  @HostListener('mouseenter', ['$event'])
  public onMouseEnter() {
    this.originalWidth = this.width;
    this.originalHeight = this.height;
    this.originalMaxWidth = this.maxWidth;
    this.width=this.height=this.maxWidth="150%";
  }

  @HostListener('mouseleave', ['$event'])
  public onMouseLeave() {
    this.width = this.originalWidth;
    this.height = this.originalHeight;
    this.maxWidth = this.originalMaxWidth;
  }
}
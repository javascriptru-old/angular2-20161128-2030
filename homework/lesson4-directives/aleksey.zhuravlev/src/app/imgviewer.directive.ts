import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgviewer]'
})
export class ImgviewerDirective {
  private originalWidth: number;
  private originalHeight: number;


  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter(){
    this.originalHeight = this.elementRef.nativeElement.height;
    this.originalWidth = this.elementRef.nativeElement.width;

    this.elementRef.nativeElement.width = this.originalWidth * 2;
    this.elementRef.nativeElement.height = this.originalHeight * 2;
  }


  @HostListener('mouseleave') onMouseLeave(){
    this.elementRef.nativeElement.width = this.originalWidth;
    this.elementRef.nativeElement.height = this.originalHeight;
  }
}

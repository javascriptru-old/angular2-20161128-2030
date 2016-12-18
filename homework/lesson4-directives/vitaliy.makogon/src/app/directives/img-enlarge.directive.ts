import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[imgEnlarge]'
})
export class ImgEnlargeDirective {
  value: string;

  @HostBinding('style.width') width = 'auto';
  @HostBinding('style.height') height = 'auto';
  @HostBinding('style.max-width') maxWidth = '100%';

  @HostListener('mouseover') onImgOver() {
    this.width = this.height = '150%';
    this.maxWidth = 'none';
  }

  @HostListener('mouseout') onImgOut() {
    this.width = this.height = this.maxWidth = '100%';
  }

}

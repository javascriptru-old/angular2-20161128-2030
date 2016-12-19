import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appImageBig]'
})
export class ImageBigDirective {

  constructor() { 
  }

  /*
  @HostBinding('class') classBiger = 'element-bg-img';
  @HostBinding('attr.imageBid') imageBig = false;
  @HostListener('click') onClick() {
    this.imageBig = !this.imageBig;
    if (this.imageBig == true ) {
      this.classBiger = 'element-biger-img';
    }
    else
    {
      this.classBiger = 'element-bg-img';
    }
  }*/

  @HostBinding('style.width') width = 'auto';
   @HostBinding('style.height') height = 'auto';
  // @HostBinding('style.object-fit') imageObjectFit;
   @HostBinding('style.max-width') maxWidth = '100%';
 
   @HostListener('mouseover') onImgOver() {
     this.width = this.height = '150%';
     this.maxWidth = 'none';
     //this.imageObjectFit ="cover";
   }
 
   @HostListener('mouseout') onImgOut() {
     this.width = this.height = this.maxWidth = '100%';
     //this.imageObjectFit =""; 
   }
  

    
  
}

import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

//@HostBinding
//@HostListener

@Directive({
  selector: '[appLog]'
})
export class LogDirective {

  constructor(private elementRef: ElementRef) { }

  @HostBinding('attr.logon') logOn = true;
  @HostBinding('class.red') redClass = true;
  @HostBinding('style.color') color = 'red';

  @HostListener('input') onMyInput() {
    if(this.logOn){
      console.log(this.elementRef.nativeElement.value);
    }
  }

  @HostListener('click') onMyClick() {
    this.logOn = !this.logOn;
  }


}

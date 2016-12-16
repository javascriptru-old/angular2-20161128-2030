import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[appZoom]'
})
export class ZoomDirective {

    constructor(private el:ElementRef) {
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.el.nativeElement.width = this.el.nativeElement.width + 20;
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.el.nativeElement.width = this.el.nativeElement.width - 20;
    }
}

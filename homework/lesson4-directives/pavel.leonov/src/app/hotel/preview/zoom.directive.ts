import {Directive, HostListener, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[zoom]'
})
export class ZoomDirective {
  private zoomedContainer: HTMLElement;

  constructor(private el: ElementRef) {

  }

  @Input('zoom-max-height') maxHeight: number;
  @Input('zoom-max-width') maxWidth: number;

  @HostListener('mouseenter')
  onMouseenter() {
    const parent = this.el.nativeElement.parentNode;
    const next = this.el.nativeElement.nextSibling;
    document.body.appendChild(this.renderZoomed(this.el.nativeElement));
  }

  @HostListener('mouseleave')
  onMouseleave() {
    this.zoomedContainer.remove();
    this.zoomedContainer = null;
  }

  renderZoomed(source: HTMLElement): HTMLElement {
    this.zoomedContainer = document.createElement('div');
    this.zoomedContainer.className = 'zoomed-container';
    const img = document.createElement('img');
    img.className = 'zoomed-target';
    img.src = this.el.nativeElement.src;

    let { width, height } = img;

    // Resize image from params
    if (this.maxWidth && this.maxHeight && (width > this.maxWidth || height > this.maxHeight)) {
      const aspectRatio = width / height;
      if (height > width) {
        height = this.maxHeight;
        width = width * aspectRatio;
      } else if (width > height) {
        width = this.maxWidth;
        height = this.maxHeight / aspectRatio;
      } else {
        width = height = this.maxHeight;
      }
    }

    // Calc zoomed image position
    const viewportHeight = window.innerHeight;
    let topCandidate = source.offsetTop;
    if ((topCandidate + height) > viewportHeight + window.pageYOffset) {
      topCandidate = viewportHeight - height + window.pageYOffset;
    }
    const top: string = topCandidate + 'px';
    const left: string = 10 + source.offsetLeft + source.offsetWidth + 'px';
    Object.assign(this.zoomedContainer.style, {
      top,
      left,
      width: `${width}px`,
      height: `${height}px`,
      position: 'absolute',
      fontSize: 0,
      boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.55)'
    });

    this.zoomedContainer.appendChild(img);
    return this.zoomedContainer;
  }

}

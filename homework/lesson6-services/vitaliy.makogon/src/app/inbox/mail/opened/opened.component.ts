import { Component, Input } from '@angular/core';

@Component({
  selector: 'opened',
  templateUrl: './opened.component.html'
})
export class OpenedComponent {
  @Input() mail: any;
}

import {Component, OnInit, Input} from '@angular/core';
import { IHotel } from '../hotel.interface';

@Component({
  selector: 'hotel-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {

  @Input('hotel') data: IHotel;

  constructor() {

  }

}

import { ImageZoomDirective } from './../../image-zoom.directive';
import { Hotel } from './../../../model/hotels';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  @Input() hotel: Hotel;
  @Output() selectedHotelChanged: EventEmitter<Hotel>  = new EventEmitter<Hotel>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.selectedHotelChanged.emit(this.hotel);
  }
}
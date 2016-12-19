import { Hotel, HotelType, hotelTypeNames } from './../../model/hotels';
import { Component, OnInit, Input, Output, EventEmitter, Directive } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
})
export class HotelsComponent implements OnInit {
  @Input() hotels: Hotel[];
  @Output() selectedHotelChanged: EventEmitter<Hotel>  = new EventEmitter<Hotel>();
  selectedHotel: Hotel;
  selectedHotelType: HotelType;

  constructor() { }

  ngOnInit() {
    this.selectedHotel = this.hotels[0];
    this.selectedHotelChanged.emit(this.selectedHotel);
  }

  onSelectedHotelChanged(event: Hotel) {
    this.selectedHotel = event;
    this.selectedHotelChanged.emit(event);
  }

  get hotelTypes() {
    return hotelTypeNames;
  }

  get selectedHotelTypeName() {
    return (this.selectedHotelType == undefined) ? null : HotelType[this.selectedHotelType];
  }

  onSelectedHotelTypeName(hotelTypeName: string) {
    this.selectedHotelType = (hotelTypeName==="Any") ? null : HotelType[hotelTypeName];
    console.log(hotelTypeName);
  }
}
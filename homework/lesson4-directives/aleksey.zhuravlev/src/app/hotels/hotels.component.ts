import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hotel } from './../domain/hotel'

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  @Input('currentHotel')
  public currentHotel: Hotel;

  @Input('hotels')
  public hotels: Hotel[];

  @Output()
  onChangeHotel = new EventEmitter<Hotel>();

  hotelTypeFilter:string;
  hotelNameFilter:string;

  constructor() { }

  ngOnInit() {
  }

  changeHotelHandler(hotel: Hotel): void{
    this.onChangeHotel.emit(hotel);
  }

}

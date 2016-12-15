import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {Hotel} from '../Helpers';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  public selectedHotel:Hotel;
  
  @Input() hotels: Hotel[];
  @Output() onHotelChange = new EventEmitter<Hotel>();
  
  constructor() {

  }

  onSelect(hotel:Hotel):void {
    this.selectedHotel = hotel;
    this.onHotelChange.emit(hotel);
  }

  ngOnInit() {
    this.selectedHotel = this.hotels[0];
  }

}

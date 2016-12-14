import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {TripGuide} from '../../types/TripGuide';

@Component({
  selector: 'hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit  {
  @Input() tripGuides:Array<TripGuide>;
  @Output() onSelectedHotelToRoot = new EventEmitter<string>();

  activeLargeAvatarUrl:string;

  // TODO: we are not allowed to use ngOnInit yet, but I have to get data from input tripGuides
  ngOnInit() {
    this.activeLargeAvatarUrl = this.tripGuides[0].hotel.largeAvatarUrl;
  }

  onSelectedHotel(hotelId:string) {
    this.onSelectedHotelToRoot.emit(hotelId);
    //TODO: because my example is simple I use hotelId to receive element in tripGuides[] :)
    this.activeLargeAvatarUrl = this.tripGuides[hotelId].hotel.largeAvatarUrl;
  }
}

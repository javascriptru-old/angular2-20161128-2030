import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IHotel } from './hotel.interface';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  hotels: IHotel[];
  data: IHotel;
  
  @Output() onChangeHotel = new EventEmitter;

  constructor() {
    this.hotels = [
      { name: 'Super Resort & Spa', image: 'assets/1.jpg', weather: { degree: -5, waterDegree: 0, location: 'Moscow' } },
      { name: 'Royal Resolt & Spa', image: 'assets/2.jpg', weather: { degree: 25, waterDegree: 20, location: 'New Yourk' } },
      { name: 'Somet Resort & Spa', image: 'assets/3.jpg', weather: { degree: -55, waterDegree: -1, location: 'Alaska' } }
    ];
  }

  selectHotel(hotel: IHotel) {
    this.data = hotel;
    this.onChangeHotel.emit(hotel);
  }

  ngOnInit() {
    this.selectHotel(this.hotels[0]);
  }

}

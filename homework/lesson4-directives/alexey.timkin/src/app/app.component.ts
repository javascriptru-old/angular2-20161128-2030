import { HotelsComponent } from './hotels/hotels.component';
import { Hotel, HotelType } from './../model/hotels';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hotels: Hotel[];
  selectedHotel: Hotel;

  ngOnInit() {
    this.hotels = [
      new Hotel(1, 'Hotel 1', "Hotel 1's address 1", "Hotel 1's address 2", "Moscow", "+7 (dummy phone 1)", HotelType.Apartment),
      new Hotel(2, 'Hotel 2', "Hotel 2's address 1", "Hotel 2's address 2", "Samara", "+7 (dummy phone 2)", HotelType["B&B"]),
      new Hotel(3, 'Hotel 3', "Hotel 3's address 1", "Hotel 3's address 2", "Torzhok", "+7 (dummy phone 3)", HotelType.Hotel),
      new Hotel(4, 'Hotel 4', "Hotel 4's address 1", "Hotel 4's address 2", "Moscow", "+7 (dummy phone 4)", HotelType.Hotel),
      new Hotel(5, 'Hotel 5', "Hotel 5's address 1", "Hotel 5's address 2", "Moscow", "+7 (dummy phone 5)", HotelType["B&B"]),
      new Hotel(6, 'Hotel 6', "Hotel 6's address 1", "Hotel 6's address 2", "Moscow", "+7 (dummy phone 6)", HotelType.Apartment),
      new Hotel(7, 'Hotel 7', "Hotel 7's address 1", "Hotel 7's address 2", "Moscow", "+7 (dummy phone 7)", HotelType["B&B"]),
      new Hotel(8, 'Hotel 8', "Hotel 8's address 1", "Hotel 8's address 2", "Moscow", "+7 (dummy phone 8)", HotelType.Hotel),
      new Hotel(9, 'Hotel 9', "Hotel 9's address 1", "Hotel 9's address 2", "Moscow", "+7 (dummy phone 9)", HotelType.Hotel),
      new Hotel(10, 'Hotel 10', "Hotel 10's address 1", "Hotel 10's address 2", "Moscow", "+7 (dummy phone 10)", HotelType["B&B"])
    ];
  }

  onSelectedHotelChanged(event: Hotel) {
    this.selectedHotel = event;
  }
}
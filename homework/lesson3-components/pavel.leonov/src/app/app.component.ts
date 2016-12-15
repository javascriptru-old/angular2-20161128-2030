import { Component } from '@angular/core';
import { IHotel } from './hotel/hotel.interface';
import { IWeather } from './weather/weather.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weather: IWeather;

  updateWeather(hotel: IHotel) {
    this.weather = hotel.weather;
  }
}

import { Component } from '@angular/core';
import { IHotel } from './hotel/hotel.interface';
import { IWeather } from './weather/weather.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  weather: IWeather;

  constructor() {
    setInterval(this.randWeather.bind(this), 5000);
  }

  /**
   * Set hotel weather
   * @param hotel
   */
  updateWeather(hotel: IHotel) {
    this.weather = hotel.weather;
  }

  /**
   * Set random weather
   */
  randWeather() {
    this.weather.degree = Math.floor(18 + (Math.random() * 24));
    this.weather.waterDegree = this.weather.degree - (2 + (Math.floor(Math.random() * 8)));
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather/weather.service';
import { Weather } from '../../types/weather';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weather: Weather;
  private randomWeatherId;

  constructor(private weatherService: WeatherService) { }

  getWeatherByHotelId(id: number): void {
    this.weatherService.getWeatherByHotelId(id).then(weather => this.weather = weather);
  }

  ngOnInit(): void {
    this.weather = {
        id: 1, 
        descWeather: 'Et harum quidem',
        airTemperature: 28,
        waterTemperature: 20,
        hotelId: 1
    };
    this.getWeatherByHotelId(1);
    this.randomWeatherId = this.startRandomWeather();
  }

  @Input()
  set onSelectHotel(id: number) {
    if (id) {
      this.stopRandomWeather();
      this.getWeatherByHotelId(id)
    }
  }

  private randomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private startRandomWeather(): Object {
    return setInterval(() => {
      this.weather.airTemperature = this.randomInteger(-30, 30);
      this.weather.waterTemperature = this.randomInteger(3, 23);
    }, 5000);
  }

  private stopRandomWeather(): void {
    clearInterval(this.randomWeatherId);
  }
}
import { Component, OnInit, Input } from '@angular/core';
import { Weather } from  './../domain/weather'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input('weather')
  weather: Weather;

  constructor() { }

  ngOnInit() {
      let fn1 = this.generateWeather.bind(this); 
      (function p() {
          fn1();
          setTimeout(() => { p(); }, 5000);
      })();
  }

  generateWeather(): void{
    this.weather.temperature += Math.round(Math.random() * 5) * (Math.random() > 0.5 ? 1 : -1);
    this.weather.water += Math.round(Math.random() * 5) * (Math.random() > 0.5 ? 1 : -1);
  }
}

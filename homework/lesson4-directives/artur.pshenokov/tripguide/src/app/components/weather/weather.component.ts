import { Component, Input} from '@angular/core';
import {Weather, WeatherMocks} from '../../types/Weather';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  @Input() weather: Weather;
  weathers: Array<Weather>;


    constructor() {
      this.weathers = WeatherMocks;
      console.log(this.weathers.length);
      let timer = Observable.timer(5000,5000);
      timer.subscribe(() => {
        this.weather = this.weathers[Math.floor(Math.random() * this.weathers.length)];
      });
    }
}

import {Component, Input} from '@angular/core';
import { IWeather } from './weather.interface';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  @Input('weather') weather: IWeather;

  constructor() {

  }
}

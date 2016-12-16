import {Component, OnInit, Input} from '@angular/core';
import { IWeather } from './weather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor() { }

  @Input('weather') data: IWeather;

  ngOnInit() {
  }
}

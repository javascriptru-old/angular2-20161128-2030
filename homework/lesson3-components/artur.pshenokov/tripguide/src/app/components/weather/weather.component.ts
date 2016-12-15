import { Component, Input} from '@angular/core';
import {Weather} from '../../types/Weather';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  @Input() weather: Weather;
}

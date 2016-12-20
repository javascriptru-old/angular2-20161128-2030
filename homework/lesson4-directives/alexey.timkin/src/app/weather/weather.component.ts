import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input() city: string;
  public airTemperature: number = 14;
  public waterTemperature: number = 20;

  constructor() {
  }

  ngOnInit() {
    Observable.interval(5000).map((x) => {
      this.airTemperature = Math.floor(Math.random()*(20)+10);
      this.waterTemperature = Math.floor(Math.random()*(10)+15);
    }).subscribe((x) => {});
  }

  ngOnChanges() {
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { IWeatherItem } from './../interfaces/iweatheritem';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {

  @Input() public currentWeather: IWeatherItem;
  
  constructor() { }
     
  ngOnInit() { }

}

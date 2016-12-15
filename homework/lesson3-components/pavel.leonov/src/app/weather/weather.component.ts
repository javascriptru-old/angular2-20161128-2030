import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor() { }

  @Input('location') location: string;

  @Input('degree') degree: number;

  @Input('waterDegree') waterDegree: number;

  ngOnInit() {
  }

}

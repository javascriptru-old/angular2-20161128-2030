import { Component, OnInit, Input } from '@angular/core';
import { City } from './../domain/city'

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html'
})
export class CityComponent implements OnInit {

  constructor() { }

  @Input('city')
  city: City;

  ngOnInit() {
  }

}

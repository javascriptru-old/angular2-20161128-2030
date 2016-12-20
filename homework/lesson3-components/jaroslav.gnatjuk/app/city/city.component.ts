import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  inputs: ['hotel'],
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

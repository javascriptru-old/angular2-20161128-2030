import { Component, OnInit, Input } from '@angular/core';
import { ICityItem } from './../interfaces/icityitem';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  @Input() public currentCity: ICityItem;

  constructor() { }

  ngOnInit() {
  }

}

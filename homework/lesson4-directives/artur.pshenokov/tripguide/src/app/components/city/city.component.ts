import {Component, Input} from '@angular/core';
import {City} from '../../types/City';

@Component({
  selector: 'city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {
  @Input() city:City;
}

import { Component, OnInit, Input } from '@angular/core';
import { City } from '../../types/city';
import { CityService } from '../../services/city/city.service';

@Component({
  selector: 'city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  public activeCity: City;

  constructor(private cityService: CityService) { }

  @Input()
  set onSelectHotel(id: number) {
    if (id) {
      this.getCityByHotelId(id)
    }
  }

  ngOnInit(): void {
    const baseImgUrl = 'app/components/city/images/';
    this.activeCity = {
        id: 1, 
        name: 'New York',
        imgUrl: baseImgUrl + 'b1.jpg',
        followers: 2850,
        following: 675
    };
  }

  getCityByHotelId(id: number): void {
    this.cityService.getCityByHotelId(id).then(city => this.activeCity = city);
  }

}

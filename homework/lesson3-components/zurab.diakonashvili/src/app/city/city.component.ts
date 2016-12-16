import { Component, OnInit } from '@angular/core';
import { rand } from '../lib/rand';

declare var require: any;
const data = require('../data/data.json');


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  public followers: number;
  public following: number;
  public imageCity: string;
  public imageCityArr: string[] = ['b1.jpg', 'b2.jpg', 'b3.jpg'];

  constructor() {
    this.followers = 1000;
    this.following = 1000;
    this.imageCity = '../images/b1.jpg';
}

  ngOnInit() {
    //this.randomizeCity();
  }

  randomizeCity(): void {
    setInterval(() => {
      this.followers = rand(1000, 20000);
      this.following = rand(1000, 20000);
      this.imageCity = '../images/' + this.imageCityArr[rand(0, 2)];
    }, 3000)
  }


  hotelChange(idx: number) {
    this.followers = data['hotel' + idx].city.followers;
    this.following = data['hotel' + idx].city.following;
    this.imageCity = '../images/' + data['hotel' + idx].city.imageCity;
  }
}

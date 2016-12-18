import * as console from 'console';
import { DataLoad } from './class/data-load';
import { Hotel } from './class/hotel';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hotels: Array<Hotel> = DataLoad.GetData();
  public timer: NodeJS.Timer;
  public currentItem: string;

  constructor() {
    this.setCurentHotel("0");
  }

/**
 * выбор отеля
 */
  public setCurentHotel(id: string) :void {
    //console.log(id);
    this.currentItem = id;
    clearTimeout(this.timer);
    this.hotels[this.currentItem].curentTemperature = Hotel.setRandomValue(this.hotels[this.currentItem].avgTeprature);
    this.timer = setInterval(() => {
      this.hotels[this.currentItem].curentTemperature = Hotel.setRandomValue(this.hotels[this.currentItem].avgTeprature);
    },5000);
  }

}

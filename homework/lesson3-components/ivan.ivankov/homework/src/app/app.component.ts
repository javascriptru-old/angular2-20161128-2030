import { Component } from '@angular/core';
import { Hotel } from './hotel';
import { DataLoad } from './data-load';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hotels: Array<Hotel> = DataLoad.GetData();
  public timer: NodeJS.Timer;
  title = 'app works!';
  public currentItem: string;
  constructor() {
    this.setCurentHotel("0");
  }

  public setCurentHotel(id: string) :void {
    this.currentItem = id;
    clearTimeout(this.timer);
    this.hotels[this.currentItem].curentTemperature = Hotel.setRandomValue(this.hotels[this.currentItem].avgTeprature);
    this.timer = setInterval(() => {
      this.hotels[this.currentItem].curentTemperature = Hotel.setRandomValue(this.hotels[this.currentItem].avgTeprature);
    },5000);
  }

}

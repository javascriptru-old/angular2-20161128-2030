import { Component } from '@angular/core';

@Component({
  selector: 'weather-widget',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedHotelId: number;

  onHotelChange(value) {
    this.selectedHotelId = value;
  }
}
import {Component} from '@angular/core';
import {TripGuide, TripGuideMocks} from './types/TripGuide';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tripGuides:Array<TripGuide>;
  activeTripGuide:TripGuide;
  title:string;

  constructor() {
    this.title = 'Hot Weather Widget';
    this.tripGuides = TripGuideMocks;
    this.activeTripGuide = this.tripGuides[0];
  }

  //TODO: is there any convention for emit listener method name?
  onSelectedHotelToRoot(hotelId:string) {
    this.activeTripGuide = this.tripGuides[hotelId];
  }
}

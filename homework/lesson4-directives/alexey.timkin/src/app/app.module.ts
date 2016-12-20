import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { WeatherComponent } from './weather/weather.component';
import { CityComponent } from './city/city.component';
import { HotelComponent } from './hotels/hotel/hotel.component';
import { ImageZoomDirective } from './image-zoom.directive';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    WeatherComponent,
    CityComponent,
    HotelComponent,
    ImageZoomDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

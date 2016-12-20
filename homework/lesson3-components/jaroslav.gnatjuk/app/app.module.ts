import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { WeatherComponent } from './weather/weather.component';
import { CityComponent } from './city/city.component';
import { HotelSearchPipe } from './hotel-search.pipe';
import { ZoomDirective } from './zoom.directive';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    WeatherComponent,
    CityComponent,
    HotelSearchPipe,
    ZoomDirective
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { HotelsComponent } from './hotels/hotels.component';
import { CityComponent } from './city/city.component';
import { ImgviewerDirective } from './imgviewer.directive';
import { HotelfilterPipe } from './hotelfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HotelsComponent,
    CityComponent,
    ImgviewerDirective,
    HotelfilterPipe
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

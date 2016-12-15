import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { CityComponent } from './components/city/city.component';

import { WeatherService } from './services/weather/weather.service';
import { HotelsService } from './services/hotels/hotels.service';
import { CityService } from './services/city/city.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HotelsComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    WeatherService,
    HotelsService,
    CityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

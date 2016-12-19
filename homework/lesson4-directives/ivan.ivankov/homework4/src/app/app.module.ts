import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HolelListComponent } from './conponents/holel-list/holel-list.component';
import { WeatherComponent } from './conponents/weather/weather.component';
import { CityComponent } from './conponents/city/city.component';
import { ImageBigDirective } from './directive/image-big.directive';
import { HotelSearchPipe } from './pipe/hotel-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HolelListComponent,
    WeatherComponent,
    CityComponent,
    ImageBigDirective,
    HotelSearchPipe
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

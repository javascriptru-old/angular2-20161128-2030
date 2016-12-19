import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { PreviewComponent } from './hotel/preview/preview.component';
import { WeatherComponent } from './weather/weather.component';
import { HotelsFilterPipe } from './hotel/hotels-filter.pipe';
import { ZoomDirective } from './hotel/preview/zoom.directive';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    PreviewComponent,
    WeatherComponent,
    HotelsFilterPipe,
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

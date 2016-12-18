import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { HotelsComponent } from './hotels/hotels.component';
import { CityComponent } from './city/city.component';
import { SomefilterPipe } from './hotels/somefilter.pipe';
import { IncreaseImageDirective } from './hotels/increase-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HotelsComponent,
    CityComponent,
    SomefilterPipe,
    IncreaseImageDirective
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

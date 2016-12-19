import { Pipe, PipeTransform } from '@angular/core';
import { IHotel } from './hotel.interface';

@Pipe({
  name: 'hotelsFilter'
})
export class HotelsFilterPipe implements PipeTransform {
  transform(hotels: IHotel[], query: string, temperature: string): IHotel[] {
    if (!query && !temperature) return hotels;
    return hotels.filter(hotel => {
      return (query ? (hotel.name.indexOf(query) !== -1) : true)
        && (temperature ? (hotel.weather.degree >= Number(temperature)) : true);
    });
  }
}

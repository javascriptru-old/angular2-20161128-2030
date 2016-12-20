import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from './domain/hotel'

@Pipe({
  name: 'hotelfilter'
})
export class HotelfilterPipe implements PipeTransform {

  transform(hotels: Hotel[], name: string, type:string): Hotel[] {
    debugger;
    if(name) {
      hotels = hotels.filter(x => x.name.toLowerCase().indexOf(name.toLowerCase()) !== -1)
    }
    if(type) {
      hotels = hotels.filter(x => type==='' || x.types.indexOf(type) > -1)
    }

    return hotels;
  }

}

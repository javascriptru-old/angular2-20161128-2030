import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterHotels'
})
export class FilterHotelsPipe implements PipeTransform {

  transform(hotels: any[], city: string): any {
    return city ?
                hotels.filter(hotel => ~hotel.desc01.indexOf(city) )
                : hotels;
  }

}

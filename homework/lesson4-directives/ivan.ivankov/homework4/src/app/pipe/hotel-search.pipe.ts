import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from '../class/hotel';

@Pipe({
  name: 'hotelSearch'
})
export class HotelSearchPipe implements PipeTransform {

  transform(value: Array<Hotel>, searchText: string, stars:number, wifi:number): any {
    return (value.filter((hotel) => hotel.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1 
    && (hotel.stars == stars || stars == 0) 
    && (hotel.wiFi == Boolean(wifi) || wifi == -1 )));
  }

}

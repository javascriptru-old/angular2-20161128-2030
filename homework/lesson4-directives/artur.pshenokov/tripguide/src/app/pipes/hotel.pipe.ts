import { Pipe, PipeTransform } from '@angular/core';
import {TripGuide} from '../types/TripGuide';

@Pipe({
  name: 'hotel'
})
export class HotelPipe implements PipeTransform {

  transform(tripGuides: Array<TripGuide>, inputFilter?: string, hotelTypeFilter?: string): any {
    return tripGuides.filter(tripGuide => {
      return (!inputFilter || tripGuide.hotel.name.toLowerCase().includes(inputFilter.toLowerCase())) &&
        (!hotelTypeFilter || tripGuide.hotel.hotelType === hotelTypeFilter);
    });
  }

}

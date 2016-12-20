import { Pipe, PipeTransform } from '@angular/core';
import { IHotelItem } from './../interfaces/ihotelitem';
import { TypeStay } from './../interfaces/typeStay';

@Pipe({
  name: 'somefilter'
})
export class SomefilterPipe implements PipeTransform {

   typeStays() : Array<string> {
        var keys = Object.keys(TypeStay);
        return keys.slice(keys.length / 2);
    }

  transform(hotels:  Array<IHotelItem>, filterValue: string, currentLinkValue:string): any {

    filterValue= filterValue || '';
    currentLinkValue = currentLinkValue|| '';
    if(currentLinkValue==='All')
      currentLinkValue = '';
    
    let ts = Object.keys(TypeStay);
    ts = ts.slice(ts.length / 2);
    
    return hotels.filter(hotel => 
    hotel.name.includes(filterValue) && (currentLinkValue==='' ||  ts[hotel.typeStay] === currentLinkValue)
    
    );
  }

}

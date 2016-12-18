import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'hotelSearch'
})
export class HotelSearchPipe implements PipeTransform {

    transform(hotels:any, text?:any):any {
        return hotels.filter(hotel => {
            return hotel.title.includes(text);
        });
    }
}

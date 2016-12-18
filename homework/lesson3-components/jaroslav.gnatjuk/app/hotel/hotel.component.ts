import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Hotel } from '../Hotel';

@Component({
    selector: 'app-hotel',
    inputs: ['hotel'],
    outputs: ['onHotelSelect'],
    templateUrl: './hotel.component.html',
    styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
    onHotelSelect:EventEmitter<Hotel>;

    constructor() {
        this.onHotelSelect = new EventEmitter();
    }

    ngOnInit() {
    }

    hotelClick(hotel: Hotel) {
        //console.log(hotel);
        this.onHotelSelect.emit(hotel);
    }

}

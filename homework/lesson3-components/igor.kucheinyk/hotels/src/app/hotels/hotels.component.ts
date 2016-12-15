import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-hotels',
    templateUrl: './hotels.component.html',
    styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

    @Input() hotels;
    @Input() hotel;
    @Output() onHotelSelect = new EventEmitter();

    hotelSelect(hotel):void {
        this.onHotelSelect.emit(hotel);
    }


    constructor() {
    }

    ngOnInit() {
    }

}

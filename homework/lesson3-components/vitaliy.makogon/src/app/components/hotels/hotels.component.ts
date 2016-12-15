import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HotelsService } from '../../services/hotels/hotels.service';
import { Hotel } from '../../types/hotel';

@Component({
  selector: 'hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotels: Hotel[];
  selectedHotel: Hotel;

  @Output() 
  onHotelChange = new EventEmitter<number>();

  constructor(private hotelsService: HotelsService) { }

  getHotels(): void {
    this.hotelsService.getHotels().then(data => this.hotels = data);
  }

  ngOnInit(): void {
    this.getHotels();
    const baseImgUrl = 'app/components/hotels/images/';
    this.selectedHotel = {
        id: 1, 
        name: 'Resort Address1',
        imgBig: baseImgUrl + '1.jpg',
        desc01: 'Sed perspiciatis',
        desc02: 'Et harum quidem',
        phone: '1285 968 685',
        imgUrl01: baseImgUrl + 'res.jpg',
        imgUrl02: baseImgUrl + 'r1.jpg'
    };
  }

  onHotel(hotel: Hotel):void {
    this.selectedHotel = hotel;
    this.onHotelChange.emit(hotel.id);
  }
}

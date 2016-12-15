import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICityItem } from './../interfaces/icityitem';
import { IHotelItem } from './../interfaces/ihotelitem';


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  @Input('currentHotel')  public currentHotel: IHotelItem;
  @Input('hotelsList')  public hotelsList: Array<IHotelItem>;

  @Output() onChangeHotel = new EventEmitter<IHotelItem>();

  changeHotel(hotel: IHotelItem): void{
    this.onChangeHotel.emit(hotel);
  }

  constructor() { 
  }

  ngOnInit() { }

}

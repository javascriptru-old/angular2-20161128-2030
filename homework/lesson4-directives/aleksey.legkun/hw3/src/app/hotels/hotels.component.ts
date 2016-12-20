import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICityItem } from './../interfaces/icityitem';
import { IHotelItem } from './../interfaces/ihotelitem';
import { TypeStay } from './../interfaces/typeStay';


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


  public filterValue: string = '';
  public currentLinkValue: string = 'All';

  public typeStayToString(val:TypeStay){
    let ts = Object.keys(TypeStay);
    ts = ts.slice(ts.length / 2);
    return ts[val];
  }
  
  constructor() { 
  }

  ngOnInit() { }

}

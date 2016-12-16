import { Hotel } from '../hotel';
import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  @Input() hotelList: Array<Hotel>;
  @Output() onCurentChange = new EventEmitter<string>();

  constructor() {
   }

   setCurentItem(value: string): void {
     this.onCurentChange.emit(value);
   }
  ngOnInit() {
  }

}

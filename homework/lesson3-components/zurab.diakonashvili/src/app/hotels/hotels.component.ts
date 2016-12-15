import { Component, OnInit, EventEmitter, Output } from '@angular/core';

declare var require: any;
const data = require('../data/data.json');


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  @Output() onHotelChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  setHotel(idx: number) {
    let img: HTMLImageElement = document.querySelector('.element-bg-img img') as HTMLImageElement;
    img.src = '../images/' + data['hotel' + idx].bigPicture;
    this.onHotelChange.emit(idx);
  }
}

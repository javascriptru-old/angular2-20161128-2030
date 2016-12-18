import { Hotel } from '../../class/hotel';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-holel-list',
  templateUrl: './holel-list.component.html',
  styleUrls: ['./holel-list.component.css']
})
export class HolelListComponent implements OnInit {

  @Input() hotelList: Array<Hotel>;
  @Output() onCurentChange = new EventEmitter<string>();

  serchText: string = "";
  starsFilter: number = 0;
  wifiFilter: number = -1;
  constructor() { }

  ngOnInit() {
    
  }

  setCurentItem(value: string): void {
     this.onCurentChange.emit(value);
  }

}

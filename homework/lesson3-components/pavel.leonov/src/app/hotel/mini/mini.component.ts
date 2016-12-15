import { Component, OnInit, Input } from '@angular/core';
import { IHotel } from '../hotel.interface';

@Component({
  selector: 'app-mini',
  templateUrl: './mini.component.html',
  styleUrls: ['./mini.component.css']
})
export class MiniComponent implements OnInit {

  @Input('hotel') data: IHotel;

  ngOnInit() {
  }

}

import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Hotel} from '../../../types/Hotel';

@Component({
  selector: 'hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {
  @Input() hotel:Hotel;
  @Output() onSelectedHotel = new EventEmitter<string>();

  selectedHotel(id:string): void {
    this.onSelectedHotel.emit(id);
  }
}

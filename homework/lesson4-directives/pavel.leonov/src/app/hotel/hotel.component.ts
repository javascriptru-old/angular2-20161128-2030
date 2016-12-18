import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { IHotel } from './hotel.interface';

@Component({
  selector: 'hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  hotel: IHotel;
  hotels: IHotel[];
  filterQuery: string;
  filterTemperature: string;

  @Output() onHotelSelect = new EventEmitter;

  constructor() {
    this.filterQuery = '';
    this.filterTemperature = '';
    this.hotels = [
      { name: 'Umaid Bhawan Palace Jodhpur', image: 'assets/baradari-dining.jpg', weather: { location: 'Джодхпур, Индия', degree: 25, waterDegree: 22 } },
      { name: 'Shinta Mani Resort', image: 'assets/shinta-mani-resort.jpg', weather: { location: 'Сием-Рип, Камбоджа', degree: 28, waterDegree: 21 } },
      { name: 'Bellevue Syrene', image: 'assets/bellevue-syrene.jpg', weather: { location: 'Сорренто, Италия', degree: 20, waterDegree: 15 } },
      { name: 'Hanoi La Siesta Hotel & Spa', image: 'assets/hanoi-la-siesta-hotel.jpg', weather: { location: 'Ханой, Вьетнам', degree: 30, waterDegree: 24 } },
      { name: 'Achtis Hotel', image: 'assets/achtis-pool.jpg', weather: { location: 'Афитос, Греция', degree: 18, waterDegree: 12 } },
      { name: 'Belmond Le Manoir aux Quat\'Saisons', image: 'assets/belmond-le-manoir-aux.jpg', weather: { location: 'Great Milton, Великобритания', degree: 20, waterDegree: 14 } },
      { name: 'Mirihi Island Resort', image: 'assets/mirihi-island-resort.jpg', weather: { location: 'Мирихи, Мальдивы', degree: 32, waterDegree: 26 } },
      { name: 'Bucuti & Tara Beach Resort Aruba', image: 'assets/bucuti-tara-beach-resorts.jpg', weather: { location: 'Палм-/Игл-Бич, Аруба', degree: 28, waterDegree: 20 } },
      { name: 'Calabash Luxury Boutique Hotel & Spa', image: 'assets/calabash-hotel.jpg', weather: { location: 'Lance aux Epines, Гренада', degree: 27, waterDegree: 22 } },
      { name: 'Hotel Ritta Hoppner', image: 'assets/hotel-ritta-hoppner.jpg', weather: { location: 'Грамаду, Бразилия', degree: 26, waterDegree: 19 } },
      { name: 'Gili Lankanfushi Maldives', image: 'assets/six-senses-spa.jpg', weather: { location: 'Ланкафуши, Мальдивы', degree: 34, waterDegree: 24 } },
    ];
  }

  ngOnInit() {
    this.selectHotel(this.hotels[0]);
  }

  /**
   * Select hotel
   * @param hotel
   */
  selectHotel(hotel: IHotel) {
    this.hotel = hotel;
    this.onHotelSelect.emit(this.hotel);
  }

}

import { Component } from '@angular/core';
import { Hotel } from './domain/hotel';
import { City } from './domain/city';
import { Weather } from './domain/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  currentHotel: Hotel;
  hotels: Hotel[];

  constructor() {
    this.hotels = getData();
    this.currentHotel = this.hotels[0];
  }

  get currentCity(): City {
    return this.currentHotel.city;
  }

  get currentWeather(): Weather {
    return this.currentCity.weather;
  }

  public changeHotel(hotel: Hotel): void {
    if(hotel!==undefined)
    {
      this.currentHotel = hotel;
    }
  }
}

function getData(): Hotel[]
{
  var weather:Weather[] = [
    {
      name:'Et harum quidem',
      temperature: 14,
      water: 20
    },
    {
      name:'Good',
      temperature: 40,
      water: 33
    },
    {
      name:'Bad',
      temperature: 10,
      water: 0
    }
  ];

  var cities:City[] =[
      {
        name:'Nam libero voluptatem',
        followers: 2850,
        following: 675,
        image:'app/city/images/b1.jpg',
        imageTumb:'app/city/images/res.jpg',
        weather: weather[0],
      },
      {
        name:'Volgograd',
        followers: 100500,
        following: 151515,
        image:'app/city/images/v.jpg',
        imageTumb:'app/city/images/v2.jpg',
        weather: weather[1],
      },
      {
        name:'Hurgada',
        followers: 100000,
        following: 10000,
        image:'app/city/images/b1.jpg',
        imageTumb:'app/city/images/res.jpg',
        weather: weather[1],
      },
      {
        name:'Harm',
        followers: 1,
        following: 1,
        image:'app/city/images/b1.jpg',
        imageTumb:'app/city/images/res.jpg',
        weather: weather[1],
      }
    ];

    var hotels: Hotel[] = [
      {
        name: 'Resort',
        address: 'Sed perspiciatis',
        phone: '+1285 968 685',
        imageTumb:'app/hotels/images/r1.jpg',
        image:'app/hotels/images/1.jpg',
        city: cities[0],
        types: []
      },
      {
        name: 'Hilton by hampton',
        address: 'RK 1',
        phone: '+7 999 999 9999',
        imageTumb:'app/hotels/images/v2.jpg',
        image:'app/hotels/images/v.jpg',
        city: cities[1],
        types: ["Swiming", "Tours"]
      },
      {
        name: 'Piramisa',
        address: 'alhasis 21',
        phone: '+77 222 999 9999',
        imageTumb:'app/hotels/images/r1.jpg',
        image:'app/hotels/images/1.jpg',
        city: cities[2],
        types: ["Swiming", "Tours", "Fishing"]
      },
      {
        name: 'Yuzhniy',
        address: 'RK 2',
        phone: '+7 555 999 9999',
        imageTumb:'app/hotels/images/U2.jpg',
        image:'app/hotels/images/U.jpg',
        city: cities[1],
        types: ["Tours"]
      },
      {
        name: 'Hilton',
        address: 'alhasis 21',
        phone: '+77 222 999 9999',
        imageTumb:'app/hotels/images/res.jpg',
        image:'app/hotels/images/b1.jpg',
        city: cities[2],
        types: ["Swiming", "Tours", "Fishing"]
      },
      {
        name: 'Kair',
        address: 'alhasis 22',
        phone: '+77 222 999 9999',
        imageTumb:'app/hotels/images/res.jpg',
        image:'app/hotels/images/b1.jpg',
        city: cities[3],
        types: ["Swiming", "Fishing"]
      },
      {
        name: 'Pavlin',
        address: 'alhasis 11',
        phone: '+77 222 999 9999',
        imageTumb:'app/hotels/images/res.jpg',
        image:'app/hotels/images/b1.jpg',
        city: cities[3],
        types: ["Swiming", "Tours"]
      }
    ];

    return hotels;
}
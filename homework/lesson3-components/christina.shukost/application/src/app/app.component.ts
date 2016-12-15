import {Component} from '@angular/core';
import {Hotel} from './Helpers';

const HOTELS:Hotel[] = [
    {
        id: 1,
        name: 'Hotel 1', 
        phone: '111-111-111',
        picture:'/app/hotels/images/1.jpg',
        city: {
            name: 'City 1', 
            street: 'Street 1',
            picture:'/app/city/images/b1.jpg',
            followers: 1111,
            following: 11
        },
        weather:{
            air:11,
            water:111,
            image:'/app/weather/images/sunny.png'
        }
    },
    {
        id: 2,
        name: 'Hotel 2',
        phone: '222-222-222',
        picture:'/app/hotels/images/2.jpg',
        city: {
            name: 'City 2',
            street: 'Street 2',
            picture:'/app/city/images/b2.jpg',
            followers: 2222,
            following: 22
        },
        weather:{
            air:22,
            water:222,
            image:'/app/weather/images/cloudy.png'
        }
    },
    {
        id: 3,
        name: 'Hotel 3',
        phone: '333-333-333',
        picture:'/app/hotels/images/3.jpg',
        city: {
            name: 'City 3',
            street: 'Street 3',
            picture:'/app/city/images/b3.jpg',
            followers: 3333,
            following: 3
        },
        weather:{
            air:33,
            water:333,
            image:'/app/weather/images/rainy.png'
        }
    }
];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Hot Weather Widget';

    public hotels = HOTELS;
    public selectedHotel:Hotel = this.hotels[0];

    public selectHotel(hotel:Hotel) {
        this.selectedHotel = hotel;
    }
}

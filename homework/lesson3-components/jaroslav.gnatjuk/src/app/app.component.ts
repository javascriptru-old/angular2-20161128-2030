import { Component } from '@angular/core';
import { Hotel } from './Hotel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    hotels:Hotel[];
    currentHotel:Hotel;

    constructor() {
        this.hotels = [];

        this.hotels.push(new Hotel({
                title: 'Rixos',
                city: 'Kemer',
                telNumber: '1234567890',
                image1Ref: '../images/res.jpg',
                image2Ref: '../images/res.jpg',
                weather: {
                    minTemperature: 15,
                    maxTemperature: 45,
                },
                followers: 1232
            }),
            new Hotel({
                title: 'Maritim',
                city: 'Belek',
                telNumber: '99999999999',
                image1Ref: '../images/r1.jpg',
                image2Ref: '../images/r1.jpg',
                weather: {
                    minTemperature: 15,
                    maxTemperature: 45,
                },
                followers: 67766
            }),
            new Hotel({
                title: 'Holiday Inn',
                city: 'Sharm el sheih',
                telNumber: '321321321',
                image1Ref: '../images/res.jpg',
                image2Ref: '../images/r1.jpg',
                weather: {
                    minTemperature: 25,
                    maxTemperature: 55,
                },
                followers: 312
            }));

        this.currentHotel = this.hotels[0];
    }

    hotelChange($event) {
        this.currentHotel = $event;
    }
}

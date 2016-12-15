import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public hotels = [
        {
            address: 'New york',
            phone: '+1285 968 685',
            description: 'description text',
            temperature: 15,
            water: 10,
            followers: 23454,
            following: 6543,
            image: 'images/new-york.jpg'
        },
        {
            address: 'San Diego',
            phone: '+1285 968 685',
            description: 'description some text',
            temperature: 14,
            water: 8,
            followers: 1231,
            following: 323,
            image: 'images/paris.jpg'
        },
        {
            address: 'Las Vegas',
            phone: '+1285 968 685',
            description: 'description other text',
            temperature: 13,
            water: 6,
            followers: 5452,
            following: 1232,
            image: 'images/luxor.jpeg'
        }
    ];

    public selectedHotel = {};

    public selectHotel(hotel:Object):void {
        this.selectedHotel = hotel;
    }
}

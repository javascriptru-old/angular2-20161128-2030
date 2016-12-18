import { Component, OnInit } from '@angular/core';
import { Hotel } from '../Hotel';

@Component({
    selector: 'app-weather',
    inputs: ['hotel'],
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
    randomTemperature:number;
    hotel: Hotel;

    constructor() {
        this.randomTemperature = 0;
    }

    ngOnInit() {
        setInterval(() => {
            this.randomTemperature = Math.floor(Math.random()*(this.hotel.weather.maxTemperature-this.hotel.weather.minTemperature+1)+this.hotel.weather.minTemperature);
        }, 5000);
    }

}

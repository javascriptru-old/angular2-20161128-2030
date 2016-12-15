import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

    @Input() hotel;
    public airTemp:number;
    public waterTemp:number;
    public interval;

    constructor() {
    }

    ngOnInit() {
        this.airTemp = this.hotel.temperature;
        this.waterTemp = this.hotel.water;
        if (!this.interval) {
            clearInterval(this.interval);
            this.interval = setInterval(() => {
                if(!this.hotel.temperature) {
                    return;
                }
                this.airTemp = this.randomIntFromInterval(this.hotel.temperature - 3, this.hotel.temperature + 3);
                this.waterTemp = this.randomIntFromInterval(this.hotel.water - 3, this.hotel.water + 3);
            }, 5000);
        }
    }

    ngOnChanges() {
        this.airTemp = this.hotel.temperature;
        this.waterTemp = this.hotel.water;
    }

    randomIntFromInterval(min:number, max:number):number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }

}

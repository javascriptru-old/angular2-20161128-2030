import { Component, OnInit } from '@angular/core';
import { rand } from '../lib/rand';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
    public cloudClass: string;
    public airDegree: number;
    public waterDegree: number;

    public cloudStylesArr: string[] = ['cloud', 'cloud1', 'cloud2', 'cloud3', 'cloud4', 'cloud5', 'cloud6']

    constructor() {
        this.cloudClass = this.cloudStylesArr[0];
        this.airDegree = 20;
        this.waterDegree = 20;
    }

    ngOnInit() {
        this.randomizeCloudClass();
    }

    randomizeCloudClass(): void {
        setInterval(() => {
            let maxCloudArr = this.cloudStylesArr.length;
            let randCloud = rand(0, maxCloudArr);
            this.cloudClass = this.cloudStylesArr[randCloud];
            this.airDegree = rand(0, 30);
            this.waterDegree = rand(0, 30);
        }, 3000);
    }

}

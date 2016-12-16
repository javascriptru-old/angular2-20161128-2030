import { Injectable } from '@angular/core';
import { Weather } from '../../types/weather';
import { WEATHER } from './mock-weather';

@Injectable()
export class WeatherService {
    getWeather(): Promise<Weather[]> {
        return Promise.resolve(WEATHER);
    }
    getWeatherByHotelId(id): Promise<Weather> {
        return Promise.resolve(WEATHER[id - 1]);
    }
}

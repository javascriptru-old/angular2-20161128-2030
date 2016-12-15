import { IWeather } from '../weather/weather.interface';

export interface IHotel {
    name: string,
    image: string,
    weather: IWeather
}
export interface IHotelOptions {
    title: string;
    city: string;
    telNumber: string;
    image1Ref: string;
    image2Ref: string;
    weather: IWeather;
    followers: number;
}

export interface IWeather {
    minTemperature: number;
    maxTemperature: number;
}

export class Hotel implements IHotelOptions {
    title: string;
    city: string;
    telNumber: string;
    image1Ref: string;
    image2Ref: string;
    weather: IWeather;
    followers: number;

    constructor(options) {
        for(let key in options) {
            this[key] = options[key];
        }
    }
}

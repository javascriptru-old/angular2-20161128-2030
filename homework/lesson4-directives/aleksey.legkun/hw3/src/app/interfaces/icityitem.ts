import { IWeatherItem } from './iweatheritem';


 export interface ICityItem {
   name: string;
   followers: number;
   following: number;
   imgBig: string;
   imgSmall: string;
   weather: IWeatherItem;
}
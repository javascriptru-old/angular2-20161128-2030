import {City, CityMocks} from './City';
import {Weather, WeatherMocks} from './Weather';
import {Hotel, HotelMocks} from './Hotel';

export class TripGuide {
  constructor(public city:City, public weather:Weather, public hotel:Hotel) { }
}

export const TripGuideMocks:Array<TripGuide> = [
  new TripGuide(CityMocks[0], WeatherMocks[0], HotelMocks[0]),
  new TripGuide(CityMocks[1], WeatherMocks[1], HotelMocks[1]),
  new TripGuide(CityMocks[2], WeatherMocks[2], HotelMocks[2]),
  new TripGuide(CityMocks[3], WeatherMocks[3], HotelMocks[3]),
  new TripGuide(CityMocks[4], WeatherMocks[2], HotelMocks[4])
];

import { Injectable } from '@angular/core';
import { City } from '../../types/city';
import { CITY } from './mock-city';

@Injectable()
export class CityService {
    getCityByHotelId(id): Promise<City> {
        return Promise.resolve(CITY[id - 1]);
    }
}

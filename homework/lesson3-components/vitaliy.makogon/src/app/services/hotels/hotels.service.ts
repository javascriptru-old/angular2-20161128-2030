import { Injectable } from '@angular/core';
import { Hotel } from '../../types/hotel';
import { HOTELS } from './mock-hotels';

@Injectable()
export class HotelsService {
    getHotels(): Promise<Hotel[]> {
        return Promise.resolve(HOTELS);
    }
}

import { ICityItem } from './icityitem';

 export interface IHotelItem {
   name: string,
   addr: string;
   phone: string;
   city: ICityItem;
   img2: string;
   bigImg: string;
}
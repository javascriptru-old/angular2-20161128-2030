import { ICityItem } from './icityitem';
import { TypeStay } from './typeStay';


 export interface IHotelItem {
   name: string,
   addr: string;
   phone: string;
   typeStay: TypeStay;
   city: ICityItem;
   img2: string;
   bigImg: string;
}
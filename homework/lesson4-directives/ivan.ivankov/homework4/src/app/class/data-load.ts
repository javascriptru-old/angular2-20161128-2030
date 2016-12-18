import {Hotel} from './hotel';

export class DataLoad {
    public static GetData(): Array<Hotel> {
        let data = new Array<Hotel>();
        let hotel = new Hotel(0,"Astopia", "прекрасный отель.", "+78124900000","Saint-Petesburg", 10, 1045,4,true);
        data.push(hotel);
        hotel = new Hotel(1,"Kosmos", "супер отель.", "+74953500101","Moskow",15, 4403,3,false);
        data.push(hotel);
        hotel = new Hotel(2,"Burj Al Arab", "супер отель.", "+43244200940000","Dubai",30,9273,5,true);
        data.push(hotel);
        return data;
    }
}

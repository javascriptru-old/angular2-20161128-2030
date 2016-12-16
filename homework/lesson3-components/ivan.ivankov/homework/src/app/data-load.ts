import {Hotel} from './hotel';
export class DataLoad {
    public static GetData(): Array<Hotel> {
        let data = new Array<Hotel>();
        let hotel = new Hotel("Astopia", "прекрасный отель.", "+78124900000","Saint-Petesburg", 10, 1045);
        data.push(hotel);
        hotel = new Hotel("Kosmos", "супер отель.", "+74953500101","Moskow",15, 4403);
        data.push(hotel);
        hotel = new Hotel("Burj Al Arab", "супер отель.", "+43244200940000","Dubai",30,9273);
        data.push(hotel);
        return data;
    }
}

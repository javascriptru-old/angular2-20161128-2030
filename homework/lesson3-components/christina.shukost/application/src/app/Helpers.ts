export class City {
    name:string;
    street:string;
    picture:string;
    followers:number;
    following:number;
}

export class Weather {
    air:number;
    water:number;
    image:string;
}

export class Hotel {
    id:number;
    name:string;
    phone:string;
    picture:string;
    city:City;
    weather:Weather;
}
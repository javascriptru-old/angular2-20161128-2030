export class Hotel {

    public curentTemperature: number;
    constructor(public name: string, public adress: string, public phone: string
            , public sityName: string, public avgTeprature: number
            , public follower: number) {

    }

    public getPhotoUrl(): string  {
        return `images/${this.name.toLowerCase().replace(new RegExp(" ",'g'), "_")}.jpg`;

    }

    public getPhotoUrlSmall(): string  {
        return `images/${this.name.toLowerCase().replace(new RegExp(" ",'g'), "_")}_small.jpg`;

    }


    public getPhotoSityUrl(): string {
        return `images/${this.sityName.toLowerCase()}.jpg`;
    }

    public static setRandomValue(avg:number):number {
        return Math.floor((Math.random() - 0.5) * 30 + avg);
    }
}

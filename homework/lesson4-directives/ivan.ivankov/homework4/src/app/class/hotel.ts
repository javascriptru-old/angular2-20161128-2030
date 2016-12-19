export class Hotel {

    public curentTemperature: number;
    constructor(public hotelId: number, public name: string, public adress: string, public phone: string
            , public sityName: string, public avgTeprature: number
            , public follower: number, public stars: number, public wiFi: boolean) {

    }

    /**
     * возращает картинку отеля
     */
    public getPhotoUrl(): string  {
        return `images/${this.name.toLowerCase().replace(new RegExp(" ",'g'), "_")}.jpg`;

    }

/**
 * возращает маленькую катринку отеля
 */
    public getPhotoUrlSmall(): string  {
        return `images/${this.name.toLowerCase().replace(new RegExp(" ",'g'), "_")}_small.jpg`;

    }

/**
 * возращает url картинки города
 */
    public getPhotoSityUrl(): string {
        return `images/${this.sityName.toLowerCase()}.jpg`;
    }

/**
 * возращает случайное число вокрул среднего значения
 */
    public static setRandomValue(avg:number):number {
        return Math.floor((Math.random() - 0.5) * 30 + avg);
    }
}

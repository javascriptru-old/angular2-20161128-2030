//export type HotelType = "Hotel" | "B&B" | "Apartment";

export enum HotelType{"Hotel", "B&B", "Apartment"}

export const hotelTypeNames = Object.keys(HotelType).map(k => HotelType[k]).filter(v => typeof v === "string") as string[];

export class Hotel {
    constructor(public id: number, public name: string, public addressLine1: string, public addressLine2: string, public addressCity: string, public phone: string,
                public type: HotelType) {
    }

    get typeName(): string {
        return HotelType[this.type];
    }
}
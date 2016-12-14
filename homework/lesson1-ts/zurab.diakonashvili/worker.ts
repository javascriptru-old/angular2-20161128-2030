export enum EJobType { jtFixed = 0, jtTimeBased = 1 }

export interface IWorker {
    id: number;
    name: string;
    jobType: EJobType;
    payment: number;
}

export abstract class Worker implements IWorker {
    id: number;
    name: string;
    jobType: EJobType;

    constructor (id: number, name: string) {
        if (!id) throw 'Specify the id, please.';
        if (!name) throw 'Specify the name, please.';
        this.id = id;
        this.name = name;
    }

    protected abstract calcPayment (): number;

    get payment (): number {
        // return Number(this.calcPayment().toFixed(2));
        return Math.round(this.calcPayment() * 100) / 100;
    }
}

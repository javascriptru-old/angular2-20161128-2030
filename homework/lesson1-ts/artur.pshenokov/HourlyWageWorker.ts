import {IWorker} from "./IWorker";

export class HourlyWageWorker implements IWorker {

    constructor(public id:string, public name:string, public rate:number) {

    }

    calculateSalary():number {
        return 20.8 * 8 * this.rate;
    }
}
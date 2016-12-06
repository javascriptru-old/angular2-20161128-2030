import {IWorker} from "./IWorker";

export class FixWageWorker implements IWorker {

    constructor(public id:string, public name:string, public rate:number) {

    }

    calculateSalary():number {
        return this.rate;
    };

}
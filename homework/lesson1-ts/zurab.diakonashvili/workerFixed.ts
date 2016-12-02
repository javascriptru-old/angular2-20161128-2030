import { EJobType } from './worker';
import { IWorker, Worker } from './worker';


export class WorkerFixed extends Worker {
    salary: number;

    constructor (id: number, name: string, salary: number = 0) {
        super(id, name);
        this.jobType = EJobType.jtFixed;
        this.salary = salary;
    }

    protected calcPayment (): number {
        return this.salary;
    };
}
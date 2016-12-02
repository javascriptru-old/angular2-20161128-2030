import { EJobType } from './worker';
import { IWorker, Worker } from './worker';


export class WorkerTimeBased extends Worker {
    hourlyRate: number;

    constructor (id: number, name: string, hourlyRate: number = 0) {
        super(id, name);
        this.jobType = EJobType.jtTimeBased;
        this.hourlyRate = hourlyRate;
    }

    protected calcPayment (): number {
        return 20.8 * 8 * this.hourlyRate;
    };
}
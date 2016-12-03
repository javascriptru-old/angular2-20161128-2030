const json = require('json-loader!./workers.json');
const _ = require('lodash');

interface IWorker {
    workerId: string;
    name: string;
    rate: number;
    getAvgZp(): number;
}

class WorkerFix implements IWorker {
    constructor(
        public workerId: string,
        public name: string,
        public rate: number) {
    }

    getAvgZp = ():number => {
        return this.rate;
    }
}

class WorkerHour implements IWorker {
    constructor(
        public workerId: string,
        public name: string,
        public rate: number) {
    }

    getAvgZp = ():number => {
        return this.rate * 20.8 * 8;
    }
}

class WorkerCollection {
    private workers: IWorker[];

    constructor() {
        this.workers = [];
    }

    sort(): IWorker[] {
        let sorted: IWorker[] = _.orderBy(this.workers, worker => worker.getAvgZp(), ['desc', 'asc']);

        return sorted;
    }

    showFirstSorted(cnt: number): void {
        let sorted: IWorker[] = this.sort();

        if (cnt > sorted.length) {
            cnt = sorted.length;
        }

        for (let i=0; i<cnt; i++) {
            this.print(sorted[i]);
        }
    }

    showLastSorted(cnt: number): void {
        let sorted: IWorker[] = this.sort();

        if (cnt > sorted.length) {
            cnt = sorted.length;
        }

        for (let i=sorted.length - cnt; i<sorted.length; i++) {
            this.print(sorted[i]);
        }
    }

    print(worker: IWorker): void {
        console.log(`${worker.workerId} | ${worker.name} | ${worker.getAvgZp()}`);
    }

    addWorker(worker: IWorker): void {
        this.workers.push(worker);
    }

    loadFixWorkers(json: IWorker[]): void {
        json.forEach((worker: IWorker) => {
            this.addWorker(new WorkerFix(worker.workerId, worker.name, worker.rate));
        });
    }
}

//примеры использования
let workers: WorkerCollection = new WorkerCollection();

workers.addWorker(new WorkerFix('fix1', 'Иванов И.И.', 10000));
workers.addWorker(new WorkerFix('fix2', 'Петров П.П.', 12000));

workers.addWorker(new WorkerHour('hour1', 'Иванов И.И.', 100));
workers.addWorker(new WorkerHour('hour2', 'Петров П.П.', 120));


workers.loadFixWorkers(json);

workers.showFirstSorted(5);

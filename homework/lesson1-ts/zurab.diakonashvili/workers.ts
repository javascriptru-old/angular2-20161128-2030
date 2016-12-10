import { EJobType } from './worker';
import { IWorker, Worker } from './worker';
import { WorkerFixed } from './workerFixed';
import { WorkerTimeBased } from './workerTimeBased';


type TWorkersList = {
    id: number,
    name: string,
    payment: number
}[];

export class Workers {
    workers: IWorker[] = [];

    add (worker: IWorker): void {
        this.workers.push(worker);
    }

    /**
     * a. Упорядочить всю последовательность работников по убыванию среднемесячного заработка.
     *     При совпадении зарплаты – упорядочивать данные по алфавиту по имени.
     */
    sort (): IWorker[] {
        return this.workers.map(worker => worker)
            .sort((a, b) => {
                // return (a.payment > b.payment) ? 1 : ((a.payment < b.payment) ? -1 : (a.name > b.name) ? 1 : -1);
                if (a.payment < b.payment) return 1;
                if (a.payment > b.payment) return -1;
                if (a.name < b.name) return 1;
                return -1;
            });
    }

    /**
     * Вывести идентификатор работника, имя и среднемесячный заработок для всех элементов списка.
     */
    get workersList (): TWorkersList {
        return this.sort().map((worker: IWorker) => {
            return { id: worker.id, name: worker.name, payment: worker.payment };
        });
    }

    /**
     * b. Вывести первые 5 имен работников из полученного в пункте а) списка.
     */
    getTopWorkers (count: number = 5): string[] {
        let res: string[] = [];

        for (let i = 0; i < count && i < this.workersList.length; i++) {
            res.push(this.workersList[i].name);
        };

        return res;
    }

    /**
     * c. Вывести последние 3 идентификатора работников из полученного в пункте а) списка.
     */
    getLowerWorkers (count: number = 3): string[] {
        let res: string[] = [];

        let len: number = this.workersList.length;

        let i: number = len - count;
        for (i = (i < 0 ? 0 : i); i < len ; i++) {
            res.push(this.workersList[i].name);
        };

        return res;
    }

    /**
     * bonus. Организовать создание сущностей (работников) из JSON коллекции (возможно из отдельного файла).
     */
    importWorkers (json: string): void {
        let oWorkers: IWorker[] = JSON.parse(json);
        // console.log(oWorkers);
        oWorkers.forEach(item => {
            if (+item.jobType === EJobType.jtFixed)
                this.add(new WorkerFixed(item.id, item.name, item.payment));
            else
                this.add(new WorkerTimeBased(item.id, item.name, item.payment));
        });
    }
}

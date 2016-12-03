import {HourlyWageWorker} from "./HourlyWageWorker";
import {FixWageWorker} from "./FixWageWorker";
import {IWorker} from "./IWorker";

export class Collections {
    public static convertJSONtoIWorker(input:Array<any>):Array<IWorker> {
        return input.map((element) => {
            if (element.type === 'fix') {
                return new FixWageWorker(element.id, element.name, element.rate);
            } else if (element.type === 'hour') {
                return new HourlyWageWorker(element.id, element.name, element.rate);
            } else {
                throw new Error(`worker type for ${element.id} is not specified correctly.`);
            }
        });
    }

    public static sort(collection:Array<IWorker>):Array<IWorker> {
        return collection.sort(Collections.compare);
    }

    private static compare(worker1:IWorker, worker2:IWorker) {
        let result = worker2.calculateSalary() - worker1.calculateSalary();

        if (result !== 0) {
            return result;
        }

        return worker1.name.localeCompare(worker2.name);
    }

    public static selectFirst(collection:Array<IWorker>, count:number):Array<IWorker> {
        return collection.slice(0, count);
    }

    public static selectLast(collection:Array<IWorker>, count:number):Array<IWorker> {
        return collection.slice(-count);
    }
}
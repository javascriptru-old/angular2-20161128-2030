import {IWorker} from './IWorker';
import {FixWageWorker} from './FixWageWorker';
import {HourlyWageWorker} from './HourlyWageWorker';
import {Collections} from "./Collections";
import * as workers from './import.json';

const collection:Array<IWorker> = [
    new FixWageWorker('w1', 'Tom', 20000),
    new FixWageWorker('w2', 'Steve', 30000),
    new FixWageWorker('w3', 'Nick', 30000),
    new FixWageWorker('w4', 'Jack', 30000),
    new HourlyWageWorker('w5', 'Bram', 200),
    new HourlyWageWorker('w6', 'Anton', 300)
];

for (let converted of Collections.convertJSONtoIWorker(workers)) {
    collection.push(converted);
}

console.log('Task a.');
const sortedCollection:Array<IWorker> = Collections.sort(collection);
for (let worker of sortedCollection) {
    console.log(`${worker.id} ${worker.name} ${worker.calculateSalary()}`);
}

console.log('Task b.');
for (let worker of Collections.selectFirst(sortedCollection, 5)) {
    console.log(`${worker.id} ${worker.name} ${worker.calculateSalary()}`);
}
console.log('Task c.');
for (let worker of Collections.selectLast(sortedCollection, 3)) {
    console.log(`${worker.id} ${worker.name} ${worker.calculateSalary()}`);
}
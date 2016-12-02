import { Workers } from './workers';
import { WorkerFixed } from './workerFixed';
import { WorkerTimeBased } from './workerTimeBased';


let workers = new Workers();

/*workers.add(new WorkerFixed(1, 'John', 100));
workers.add(new WorkerTimeBased(2, 'Ben', 2));
workers.add(new WorkerFixed(3, 'Bonny', 110));
workers.add(new WorkerTimeBased(4, 'Lisa', 1));
workers.add(new WorkerFixed(5, 'Emma', 300));
workers.add(new WorkerTimeBased(6, 'Michael', 3));
workers.add(new WorkerTimeBased(7, 'Ember', 4));
workers.add(new WorkerFixed(8, 'Andrew', 550));
workers.add(new WorkerFixed(9, 'Barbie', 250));
workers.add(new WorkerFixed(10, 'Ivan', 150));
workers.add(new WorkerFixed(11, 'Carmichle', 120));
workers.add(new WorkerFixed(12, 'Olivia', 20));
workers.add(new WorkerFixed(13, 'Bob', 200));
workers.add(new WorkerFixed(14, 'Gloria', 2500));
*/

workers.importWorkers(`[
  { "id": "14", "name": "John",      "jobType": "0", "payment":  "100" },
  { "id":  "7", "name": "Ben",       "jobType": "1", "payment":    "2" },
  { "id":  "8", "name": "Bonny",     "jobType": "0", "payment":  "110" },
  { "id":  "6", "name": "Lisa",      "jobType": "1", "payment":    "1" },
  { "id":  "2", "name": "Emma",      "jobType": "0", "payment":  "300" },
  { "id":  "5", "name": "Michael",   "jobType": "1", "payment":    "3" },
  { "id":  "9", "name": "Ember",     "jobType": "1", "payment":    "4" },
  { "id": "13", "name": "Andrew",    "jobType": "0", "payment":  "550" },
  { "id":  "4", "name": "Barbie",    "jobType": "0", "payment":  "250" },
  { "id": "10", "name": "Ivan",      "jobType": "0", "payment":  "150" },
  { "id": "11", "name": "Carmichle", "jobType": "0", "payment":  "120" },
  { "id":  "3", "name": "Olivia",    "jobType": "0", "payment":   "20" },
  { "id":  "1", "name": "Bob",       "jobType": "0", "payment":  "200" },
  { "id": "12", "name": "Gloria",    "jobType": "0", "payment": "2500" }
]`);
console.log('------- JSON >>> --------');


console.log();
console.log('workers count = ', workers.workers.length);

console.log();
console.log('all workers list:\n', workers.workersList);

console.log();
console.log('top workers list:\n', workers.getTopWorkers());

import { EmployeesHourPayment } from './employeesHourPayment';

let worker = new EmployeesHourPayment();

worker.sortByPayment();
worker.sort();
console.log(worker.getInfo());
console.log(worker.getInfo(0, 'name', 5));
console.log(worker.getInfo(-3, 'id'));

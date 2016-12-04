import { Employees } from './employees';

declare var require: any;
let jsonData:any[] = require('./employees.json');

let employees = new Employees();

// emploees.addEmployeesRandom(10);
employees.addEmployeesFromJson(jsonData);
employees.sort();
employees.print();
employees.printFirstNames(5);
employees.printLastIds(3);
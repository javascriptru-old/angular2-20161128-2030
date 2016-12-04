import { Employee, EmployeeMonthlyPayment, EmployeeHourlyPayment } from './employee';
import * as fs from 'fs';
import 'console.table';

let json:string = fs.readFileSync('employees.json', 'utf-8');
let employeesJson: (EmployeeHourlyPaymentJSON | EmployeeMonthlyPaymentJSON)[] = JSON.parse(json);
let employees: (EmployeeHourlyPayment | EmployeeMonthlyPayment)[] = employeesJson.map(employeeJson => {
    if ((employeeJson as EmployeeMonthlyPaymentJSON).monthsWithSalary != undefined) {
        return EmployeeMonthlyPayment.decodeJSON(employeeJson as EmployeeMonthlyPaymentJSON);
    } else {
        return EmployeeHourlyPayment.decodeJSON(employeeJson as EmployeeHourlyPaymentJSON);
    }
});

employees.sort((a, b) => {
    let _a = a.getAverageMonthlySalary(), _b = b.getAverageMonthlySalary();

    return _a > _b ? 1 : _a < _b ? -1 : a.name > b.name ? 1 : -1;
});

console.table(employees.map(item => {
    return {
        id: item.id,
        name: item.name,
        averageNothlySalary: item.getAverageMonthlySalary()
    }
}));

console.log('');
console.log('a)');

for (let employee of employees.slice(0, 5)) {
    console.log(`\t${employee.name}`);
}

console.log('b)');

for (let employee of employees.slice(-3)) {
    console.log(`\t${employee.id}`);
}
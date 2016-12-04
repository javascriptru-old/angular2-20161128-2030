import * as fs from 'fs';
import { Employee, EmployeeMonthlyPayment, EmployeeHourlyPayment } from './employee';
import * as moment from 'moment';

let firstNames: string[] = ['Иван', 'Алексей', 'Борис', 'Сергей', 'Александр', 'Игорь', 'Павел'];
let lastNames: string[] = ['Иванов', 'Петров', 'Сидоров', 'Пушкин', 'Бунин', 'Толстой', 'Достоевский'];

function rand(min: number = 0, max: number = 1): number {
    return Math.round(Math.random() * (max - min) + min);
}

const COUNT = 10;
let randSalaryMonth = rand.bind(null, 10000, 100000);
let randHourlyRate = rand.bind(null, 300, 5000);
let employees: (EmployeeHourlyPayment | EmployeeMonthlyPayment)[] = [];

for (let i = 0; i < COUNT; i++) {
    let type = rand();
    let _class; // Как правильно объявить тип?

    if (rand()) {
        _class = EmployeeHourlyPayment;
    } else {
        _class = EmployeeMonthlyPayment;
    }

    let employee: (EmployeeHourlyPayment | EmployeeMonthlyPayment) = new _class(i, firstNames[rand(0, firstNames.length)], lastNames[rand(0, lastNames.length)]);

    if (EmployeeMonthlyPayment.isInstance(employee)) {
        employee.setDefaultSalary(randSalaryMonth());

        if (rand()) {
            employee.addSalary(new Date(), 1000);
        } else {
            let monthCount = rand(5, 20);
            let date = new Date(rand(2010, 2016), rand(1, 12));

            for (let j = monthCount; j > 0; j--) {
                employee.addSalary(moment(date).add(-j, 'month').toDate(), randSalaryMonth());
            }
        }
    } else if (EmployeeHourlyPayment.isInstance(employee)) {
        employee.setDefaultHourlyRate(randHourlyRate());

        let dayCount = rand(100, 1000);
        let date = new Date(rand(2010, 2016), rand(1, 12));

        for (let j = dayCount; j > 0; j--) {
            employee.addSalary(moment(date).add(-j, 'day').toDate(), rand(1, 8), randHourlyRate());
        }
    }

    employees.push(employee);
}

fs.writeFileSync('./employees.json', JSON.stringify(employees.map(employee => employee.encodeJSON())), 'utf-8'); 

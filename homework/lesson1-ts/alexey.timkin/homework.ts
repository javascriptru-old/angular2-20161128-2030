import {HomeworkUtils} from './HomeworkUtils';

interface IEmployee {
    id: number;
    firstName: string;
    lastName: string;
    fullNameUpperCase: string;
    averageMonthlyPay: number;
}

class Employee implements IEmployee {
    public id: number;
    private _firstName: string;
    private _lastName: string;
    public averageMonthlyPay: number;
    private _fullNameUpperCase: string;

    get fullNameUpperCase() {//lazy field initialization for comparator, other getters and setters are for resetting lazy initialization
        if (!this._fullNameUpperCase) {
            this._fullNameUpperCase = (this._firstName+" "+this._lastName).toUpperCase();
        }
        return this._fullNameUpperCase;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(newValue: string) {
        this._firstName = newValue;
        this._fullNameUpperCase = undefined;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(newValue: string) {
        this._lastName = newValue;
        this._fullNameUpperCase = undefined;
    }
}

class PermanentEmployee extends Employee {}

class TermContractEmployee extends Employee {
    set hourlyPayRate(hourlyPayRate: number) {
        this.averageMonthlyPay = 20.8*8*hourlyPayRate;
    }
}

declare function require(name:string);
let employees: IEmployee[] = [];
for (const employeeItem of JSON.parse(require("fs").readFileSync("./employees.json", 'utf8')).employees) {
    employees.push(HomeworkUtils.copyProperties((employeeItem.hourlyPayRate)?new TermContractEmployee():new PermanentEmployee(), employeeItem));
}

let employeesSortedByPay = employees.sort((employee1:IEmployee, employee2:IEmployee) => {
    let compareValue = employee2.averageMonthlyPay-employee1.averageMonthlyPay;
    return (compareValue === 0) ? compareValue = employee1.fullNameUpperCase.localeCompare(employee2.fullNameUpperCase) : compareValue;
});

console.log("All employees sorted by pay, then name:");
HomeworkUtils.printObjectArray(employeesSortedByPay, ['id', 'firstName', 'lastName', 'averageMonthlyPay'], [5, 20, 20, 20], 2);

console.log("First five employees sorted by pay, then name:");
HomeworkUtils.printObjectArray(employeesSortedByPay.slice(0, 5), ['id', 'firstName', 'lastName', 'averageMonthlyPay'], [5, 20, 20, 20], 2);

console.log("Ids of the last three employees sorted by pay, then name:");
for (const employee of employeesSortedByPay.slice(employeesSortedByPay.length-3, employeesSortedByPay.length)) {
    HomeworkUtils.printObject(employee, ['id'], 2);
}
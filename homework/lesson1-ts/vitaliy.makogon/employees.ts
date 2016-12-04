import { EmployeePerMonth } from './employeePerMonth';
import { EmployeePerHour } from './employeePerHour';
import { IEmployee } from './iemployee';

export class Employees {
    private arrEmployees:IEmployee[] = [];

    addEmployeesRandom(count: number): void {
        let arrNames = ['Andrey', 'Denis', 'Yarik', 'Vitalik', 'Alina', 'Diana', 'Oleg', 'Kiril', 'Ivan', 'Karina'];

        for(var i = 0; i < count; i++) {
            if(i % 2 == 0) {
                let employeePerHour = new EmployeePerHour( i, arrNames[ this.randomInteger(0, 9) ], this.randomInteger(10, 20) );
                this.arrEmployees.push(employeePerHour);
            } else {
                let employeePerMonth = new EmployeePerMonth( i, arrNames[ this.randomInteger(0, 9) ], this.randomInteger(3000, 7000) );
                this.arrEmployees.push(employeePerMonth);
            }
        }

    }

    private randomInteger(min: number, max: number): number {
        return Math.floor( Math.random() * (max - min + 1) ) + min;
    }

    sort(): void {
        this.arrEmployees.sort( (a: any, b: any): number => {
            if ( a.averagePay() < b.averagePay() ) return 1;
            if ( a.averagePay() > b.averagePay() ) return -1;
            return ( a.name > b.name )? 1 : -1;
        });
    }

    print(): void {
        this.arrEmployees.forEach( (employee, i) => {
            console.log(`${employee.id} ${employee.name} ${employee.averagePay()}`);
        });
    }

    printFirstNames(count: number): void {
        for(let i = 0; i < count && i < this.arrEmployees.length; i++) {
            console.log(this.arrEmployees[i].name);
        }
    } 

    printLastIds(count: number): void {
        let length = this.arrEmployees.length;

        for(let i = length - count; i < length; i++) {
            console.log(this.arrEmployees[i].id);
        }
    }  

    addEmployeesFromJson(jsonData: any): void {
        jsonData.forEach( (employee, i) => {
            if(employee.paymentType == "perMonth") {
                let employeePerMonth = new EmployeePerMonth( i, employee.name, employee.payment );
                this.arrEmployees.push( employeePerMonth );
            } else {
                let employeePerHour = new EmployeePerHour( i, employee.name, employee.payment );
                this.arrEmployees.push( employeePerHour );
            }

        });
    }
}
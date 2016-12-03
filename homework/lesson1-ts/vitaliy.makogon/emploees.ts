import { EmployeePerMonth } from './employeePerMonth';
import { EmployeePerHour } from './employeePerHour';
import { IEmployee } from './iemploee';

export class Emploees {
    private arrEmploees:IEmployee[] = [];

    addEmploeesRandom(count: number): void {
        let arrNames = ['Andrey', 'Denis', 'Yarik', 'Vitalik', 'Alina', 'Diana', 'Oleg', 'Kiril', 'Ivan', 'Karina'];

        for(var i = 0; i < count; i++) {
            if(i % 2 == 0) {
                let employeePerHour = new EmployeePerHour( i, arrNames[ this.randomInteger(0, 9) ], this.randomInteger(10, 20) );
                this.arrEmploees.push(employeePerHour);
            } else {
                let employeePerMonth = new EmployeePerMonth( i, arrNames[ this.randomInteger(0, 9) ], this.randomInteger(3000, 7000) );
                this.arrEmploees.push(employeePerMonth);
            }
        }

    }

    private randomInteger(min: number, max: number): number {
        return Math.floor( Math.random() * (max - min + 1) ) + min;
    }

    sort(): void {
        this.arrEmploees.sort( (a: any, b: any): number => {
            if ( a.averagePay() < b.averagePay() ) return 1;
            if ( a.averagePay() > b.averagePay() ) return -1;
            return ( a.name > b.name )? 1 : -1;
        });
    }

    print(): void {
        this.arrEmploees.forEach( (emploee, i) => {
            console.log(`${emploee.id} ${emploee.name} ${emploee.averagePay()}`);
        });
    }

    printFirstNames(count: number): void {
        for(let i = 0; i < count && i < this.arrEmploees.length; i++) {
            console.log(this.arrEmploees[i].name);
        }
    } 

    printLastIds(count: number): void {
        let length = this.arrEmploees.length;

        for(let i = length - count; i < length; i++) {
            console.log(this.arrEmploees[i].id);
        }
    }  

    addEmploeesFromJson(jsonData: any): void {
        jsonData.forEach( (emploee, i) => {
            if(emploee.paymentType == "perMonth") {
                let employeePerMonth = new EmployeePerMonth( i, emploee.name, emploee.payment );
                this.arrEmploees.push( employeePerMonth );
            } else {
                let employeePerHour = new EmployeePerHour( i, emploee.name, emploee.payment );
                this.arrEmploees.push( employeePerHour );
            }

        });
    }
}
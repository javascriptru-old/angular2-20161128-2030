const jsonData = `[
    { "name": "Gena", "payment": "7000", "paymentType": "perMonth" },
    { "name": "Andrey", "payment": "14", "paymentType": "perHour" },
    { "name": "Elena", "payment": "4200", "paymentType": "perMonth" },
    { "name": "Roma", "payment": "6700", "paymentType": "perMonth" },
    { "name": "Toma", "payment": "20", "paymentType": "perHour" }
]`;

interface IEmployee {
    id: number;
    name: string;
    payment: number;
    
    averagePay(): number;
}

class EmployeePerHour implements IEmployee {
    id;
    name;
    payment;

    constructor(id: number, name: string, payment: number) {
        this.name = name;
        this.payment = payment;
        this.id = id;
    }
    
    averagePay() {
        return 20.8 * 8 * this.payment ^ 0;
    }
}

class EmployeePerMonth extends EmployeePerHour {
    averagePay() {
        return this.payment;
    }
}

class Emploees {
    arrEmploees:IEmployee[] = [];

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

    randomInteger(min: number, max: number): number {
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
        JSON.parse(jsonData).forEach( (emploee, i) => {
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

let emploees = new Emploees();

// emploees.addEmploeesRandom(10);
emploees.addEmploeesFromJson(jsonData);
emploees.sort();
emploees.print();
emploees.printFirstNames(5);
emploees.printLastIds(3);
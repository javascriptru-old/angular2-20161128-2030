import { IEmployee } from './iemploee';

export class EmployeePerHour implements IEmployee {
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
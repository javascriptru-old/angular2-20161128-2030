import {Employees} from './employees';

export class EmployeesFixedPayment extends Employees {
    calculatingSalary(): number {
        return this.fixedMonthlySalary;
    }
}
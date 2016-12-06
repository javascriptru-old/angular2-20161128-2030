import { EmployeePerHour } from './employeePerHour';

export class EmployeePerMonth extends EmployeePerHour {
    averagePay() {
        return this.payment;
    }
}
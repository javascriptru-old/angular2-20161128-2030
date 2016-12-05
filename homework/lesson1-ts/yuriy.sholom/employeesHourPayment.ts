import {Employees} from './employees';

export class EmployeesHourPayment extends Employees {
    calculatingSalary(): number {
        return this.daysOfMonth * this.hoursOfDay * this.hourlyRate;
    }
}
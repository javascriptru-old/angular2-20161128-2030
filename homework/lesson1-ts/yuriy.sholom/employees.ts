import { IEmployessSettings } from './IEmployessSettings';
import { IEmployees } from './IEmployees';

declare let require: any;

export class Employees implements IEmployees {
  protected employees: IEmployessSettings[] = require('./employee.json');
  protected id: number;
  protected name: string;
  protected fixedMonthlySalary: number = 2000;

  constructor(protected daysOfMonth: number = 20.8, protected hoursOfDay: number = 8, protected hourlyRate: number = 15) {
    this.daysOfMonth = daysOfMonth;
    this.hoursOfDay = hoursOfDay;
    this.hourlyRate = hourlyRate;
  }

  calculatingSalary(): any {}

  sort() {
    this.employees.sort((a: any, b: any) => this.sortBySalary(a, b))
  }

  sortByPayment() {
    this.employees.sort((a: any, b: any) => !a.salary ? a.salary = this.calculatingSalary() : a.salary)
  }

  sortBySalary(a: any, b: any) {
    return a.salary == b.salary ? this.sortByName(a, b) : b.salary - a.salary;
  }

  sortByName(a: any, b: any) {
    return a.name > b.name ? 1 : (a.name < b.name ? -1 : 0 )
  }

  getInfo( index: number = 0, key: string = 'all', count: number = this.employees.length): IEmployessSettings[] {
    return this.employees.slice(index, count).map((a):any => key == 'all' ? a : a[key]);
  }
}

















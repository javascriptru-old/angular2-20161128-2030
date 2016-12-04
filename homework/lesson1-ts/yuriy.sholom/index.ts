let require: any;

interface IEmployessSettings {
  id: number;
  name: string;
  salary: string;
}

interface IEmployees {
 calculatingSalary(): void;
}

class Employees implements IEmployees {
  protected employees: IEmployessSettings[] = require('./employee.json');
  protected id: number;
  protected name: string;
  protected monthlySalary: number;
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

class EmployeesHourPayment extends Employees {
  calculatingSalary(): number {
    return this.daysOfMonth * this.hoursOfDay * this.hourlyRate;
  }
}

class EmployeesFixedPayment extends Employees {
  calculatingSalary(): number {
    return this.fixedMonthlySalary;
  }
}

let worker = new EmployeesHourPayment();


worker.sortByPayment();
worker.sort();
console.log(worker.getInfo());
console.log(worker.getInfo(0, 'name', 5));
console.log(worker.getInfo(-3, 'id'));












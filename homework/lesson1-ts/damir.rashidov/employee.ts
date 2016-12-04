import * as moment from 'moment';

class Employee {
    public firstName: string;
    public lastName: string;
    public id: number;

    public constructor(id: number, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public get name() {
        return `${this.firstName} ${this.lastName}`;
    }
};

declare global {
    interface IPaymentEmployee {
        getAverageMonthlySalary(): number;
    }

    interface EmployeeJSON {
        id: number,
        firstName: string,
        lastName: string
    }

    interface EmployeeMonthlyPaymentJSON extends EmployeeJSON {
        monthsWithSalary: {
            month: string,
            salary: number
        }[],
        defaultSalary?: number
    }

    interface EmployeeHourlyPaymentJSON extends EmployeeJSON {
        daysWithSalary: {
            day: string,
            salary: number
        }[],
        defaultHourlyRate?: number
    }
}

class EmployeeMonthlyPayment extends Employee implements IPaymentEmployee {
    private monthsWithSalary: {
        [key: string]: number
    } = {};

    private defaultSalary: number;

    public constructor(id: number, firstName: string, lastName: string, defaultSalary?: number) {
        super(id, firstName, lastName);

        this.defaultSalary = defaultSalary;
    }

    public setDefaultSalary(defaultSalary: number): void {
        this.defaultSalary = defaultSalary;
    }

    public addSalary(month: Date, salary?: number): void {
        let startOfMonth: string = moment(month).startOf('month').format('YYYYMM');

        if (salary === undefined && this.defaultSalary === undefined) {
            throw new Error('Default salary not set');
        }
        
        this.monthsWithSalary[startOfMonth] = salary === undefined ? this.defaultSalary: salary;
    }

    public getAverageMonthlySalary(): number {
        let salaries: number[] = Object.keys(this.monthsWithSalary).map(key => this.monthsWithSalary[key]);

        if (salaries.length == 0) { 
            throw new Error('Employee has no salary');
        }

        return Math.round(salaries.reduce((sum, current) => sum + current, 0) / salaries.length * 100) / 100;
    }

    public static isInstance(employee: any): employee is EmployeeMonthlyPayment {
        return employee instanceof EmployeeMonthlyPayment;
    }

    public encodeJSON(): EmployeeMonthlyPaymentJSON {
        let json: EmployeeMonthlyPaymentJSON = {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            monthsWithSalary: Object.keys(this.monthsWithSalary).map(key => {
                return {
                    month: moment(key, 'YYYYMM').toISOString(),
                    salary: this.monthsWithSalary[key]
                };
            })
        }

        if (this.defaultSalary !== undefined) {
            json.defaultSalary = this.defaultSalary;
        }

        return json;
    }

    public static decodeJSON(json: EmployeeMonthlyPaymentJSON): EmployeeMonthlyPayment {
        let employee = new EmployeeMonthlyPayment(json.id, json.firstName, json.lastName, json.defaultSalary);

        employee.monthsWithSalary = {};
        
        for(let item of json.monthsWithSalary) {
            employee.monthsWithSalary[moment(new Date(item.month)).format('YYYYMM')] = item.salary;
        }
        
        return employee;
    }
}

class EmployeeHourlyPayment extends Employee implements IPaymentEmployee {
    private daysWithSalary: {
        [key: string]: number
    } = {};

    private defaultHourlyRate: number;

    public constructor(id: number, firstName: string, lastName: string, defaultHourlyRate?: number) {
        super(id, firstName, lastName);

        this.defaultHourlyRate = defaultHourlyRate;
    }

    public setDefaultHourlyRate(defaultHourlyRate: number): void {
        this.defaultHourlyRate = defaultHourlyRate;
    }

    public addSalary(day: Date, hours: number, hourlyRate?: number): void {
        let startOfDay: string = moment(day).startOf('day').format('YYYYMMDD');

        if (hourlyRate == undefined && this.defaultHourlyRate === undefined) {
            throw new Error('Default hourly rate not set');
        }
        
        this.daysWithSalary[startOfDay] = hours * (hourlyRate === undefined ? this.defaultHourlyRate: hourlyRate);
    }

    public getAverageMonthlySalary(): number {
        let salariesWithDay: {
            day: Date, 
            salary: number
        }[] = Object.keys(this.daysWithSalary).map(key => {
            return {
                day: moment(key, 'YYYYMMDD').toDate(),
                salary: this.daysWithSalary[key]
            }
        });

        if (salariesWithDay.length == 0) { 
            throw new Error('Employee has no salary');
        }

        let monthsWithSalary: {
            [key: string]: number
        } = {};

        for(let salaryWithDay of salariesWithDay) {
            let startOfMonth: string = moment(salaryWithDay.day).startOf('month').format('YYYYMM');
            let oldValue = monthsWithSalary[startOfMonth];
            monthsWithSalary[startOfMonth] = (oldValue === undefined ? 0 : oldValue) + salaryWithDay.salary;
        } 

        let salaries: number[] = Object.keys(monthsWithSalary).map(key => monthsWithSalary[key]);

        return Math.round(salaries.reduce((sum, current) => sum + current, 0) / salaries.length * 100) / 100;
    }

    public static isInstance(employee: any): employee is EmployeeHourlyPayment {
        return employee instanceof EmployeeHourlyPayment;
    }

    public encodeJSON(): EmployeeHourlyPaymentJSON {
        let json: EmployeeHourlyPaymentJSON = {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            daysWithSalary: Object.keys(this.daysWithSalary).map(key => {
                return {
                    day: moment(key, 'YYYYMMDD').toISOString(),
                    salary: this.daysWithSalary[key]
                };
            })
        }

        if (this.defaultHourlyRate !== undefined) {
            json.defaultHourlyRate = this.defaultHourlyRate;
        }

        return json;
    }

    public static decodeJSON(json: EmployeeHourlyPaymentJSON): EmployeeHourlyPayment {
        let employee = new EmployeeHourlyPayment(json.id, json.firstName, json.lastName, json.defaultHourlyRate);

        employee.daysWithSalary = {};
        
        for(let item of json.daysWithSalary) {
            employee.daysWithSalary[moment(new Date(item.day)).format('YYYYMMDD')] = item.salary;
        }
        
        return employee;
    }
}

export { Employee, EmployeeMonthlyPayment, EmployeeHourlyPayment };

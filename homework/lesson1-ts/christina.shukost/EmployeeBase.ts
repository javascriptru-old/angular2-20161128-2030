import { IEmployeeBase } from "./IEmployeeBase";
import { DataType } from './data/dataType';

export class EmployeeBase implements IEmployeeBase {
    private id: number;
    private name: string;
    private avgMonthlySalary: number;
    
    constructor(employee: DataType) {
        this.id = employee.id;
        this.name = employee.name;
        this.avgMonthlySalary = (employee.isFixed) ? employee.salary : 20.8 * 8 * employee.salary;
    }

    getId():number {
        return this.id;
    }

    getName():string {
        return this.name;
    }

    getAvgMonthlySalary():number {
        return this.avgMonthlySalary;
    }

    print():string {
        return `ID: ${ this.getId() 
            }, NAME: ${ this.getName() 
            }, AVG MONTHLY SALARY: ${ this.getAvgMonthlySalary() }`;
    }

    static sortBySalary = (a:EmployeeBase, b:EmployeeBase):number => {
        let salaryOrder = b.getAvgMonthlySalary() - a.getAvgMonthlySalary();
        if(salaryOrder) return salaryOrder;
        return (a.getName() > b.getName()) ? 1 : -1;
    };
}
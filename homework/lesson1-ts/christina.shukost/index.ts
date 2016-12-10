import { EmployeeBase } from './EmployeeBase';
import { DataType } from './data/dataType';

declare var require:any;
const data:DataType[] = require('./data/employees.json');

const employees = data.map((employee: DataType): EmployeeBase => {
    return new EmployeeBase(employee);
});

const sortedEmployees = employees.sort(EmployeeBase.sortBySalary);

sortedEmployees.forEach((employee:EmployeeBase):void => {
    console.log(employee.print());
});


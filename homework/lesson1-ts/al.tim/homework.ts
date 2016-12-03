interface IEmployee {
    employeeId: number;
    firstName: string;
    lastName: string;
    averageMonthlyPayHome: number;
}

class Employee implements IEmployee {
    public employeeId: number;
    public firstName: string;
    public lastName: string;
    public averageMonthlyPayHome: number;
}

class PermanentEmployee extends Employee implements IEmployee {
}

class TermContractEmployee extends Employee implements IEmployee {
    set hourlyPayRate(hourlyPayRate: number) {
        this.averageMonthlyPayHome = 20.8*8*hourlyPayRate;
    }
}

class HomeworkUtils {
    static toInstance<T>(targetObject: T, sourceObject: any) : T {
        for (var propName in sourceObject) {
            targetObject[propName] = sourceObject[propName]
        }

        return targetObject;
    }
    static printObject(object: any, propertyNames: string[], prefix) {
        let toPrint:string;
        for (const propertyName of propertyNames) {
            toPrint = (toPrint ? toPrint+ "; " : "")+ propertyName+":"+object[propertyName];
        }
        console.log((prefix?prefix:"")+toPrint);
    }
}

declare function require(name:string);
let employees: IEmployee[] = [];
for (const employeeItem of JSON.parse(require("fs").readFileSync("./employees.json", 'utf8')).employees) {
    let newIEmployeeItem: IEmployee = HomeworkUtils.toInstance((employeeItem.hourlyPayRate)?new TermContractEmployee():new PermanentEmployee(), employeeItem);
    employees.push(newIEmployeeItem);
}

let employeesSortedByPay = employees.sort((employee1:IEmployee, employee2:IEmployee) => {
    let compareValue = employee2.averageMonthlyPayHome-employee1.averageMonthlyPayHome;
    if (compareValue === 0) {
        compareValue = (employee1.firstName+" "+employee1.lastName).toUpperCase().localeCompare((employee2.firstName+" "+employee2.lastName).toUpperCase());
    }
    return compareValue;
});

console.log("All employees sorted by pay, then name:");
for (const employee of employeesSortedByPay) {
    HomeworkUtils.printObject(employee, ['employeeId', 'firstName', 'lastName', 'averageMonthlyPayHome'], "  ");
}

console.log("First five employees sorted by pay, then name:");
for (const employee of employeesSortedByPay.slice(0, 5)) {
    HomeworkUtils.printObject(employee, ['employeeId', 'firstName', 'lastName', 'averageMonthlyPayHome'], "  ");
}

console.log("Ids of the last three employees sorted by pay, then name:");
for (const employee of employeesSortedByPay.slice(employeesSortedByPay.length-3, employeesSortedByPay.length)) {
    HomeworkUtils.printObject(employee, ['employeeId'], "  ");
}
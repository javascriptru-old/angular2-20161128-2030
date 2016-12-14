interface IEmployee {
    id: number;
    name: string;

    calcMonthIncome(): number;
}

interface IHourlyPaymentEmployee extends IEmployee {
    hourlyPayment: number;
}

interface IFixedPaymentEmployee extends IEmployee {
    fixedPayment: number;
}

interface IShortEmployee {
    id: number;
    name: string;
    monthlyIncome: number;
}

interface IEmployeeList {
    sortDescending(): IShortEmployee[];
    leaderNames(list: IShortEmployee[]): string[];
    last3Ids(list: IShortEmployee[]): number[];
}

/**
 * Hourly-Payment Employee class
 * 
 * @class HourlyPaymentEmployee
 * @implements {IHourlyPaymentEmployee}
 */
class HourlyPaymentEmployee implements IHourlyPaymentEmployee {
    id: number;
    name: string;
    hourlyPayment: number;

    constructor(employeeData) {
        this.id = employeeData.id;
        this.name = employeeData.name;
        this.hourlyPayment = employeeData.hourlyPayment;
    }

    calcMonthIncome(): number {
        return 20.8 * 8 * this.hourlyPayment;
    }
}

/**
 * Fixed-Payment Employee class
 * 
 * @class FixedPaymentEmployee
 * @implements {IFixedPaymentEmployee}
 */
class FixedPaymentEmployee implements IFixedPaymentEmployee {
    id: number;
    name: string;
    fixedPayment: number;
    
    constructor(employeeData) {
        this.id = employeeData.id;
        this.name = employeeData.name;
        this.fixedPayment = employeeData.fixedPayment;
    }

    calcMonthIncome(): number {
        return this.fixedPayment;
    }
}

/**
 * EmployeeList class
 * 
 * @class EmployeeList
 * @implements {IEmployeeList}
 */
class EmployeeList implements IEmployeeList {
    private list: IEmployee[];

    constructor(list: IEmployee[]) {
        this.list = list;
    }

    sortDescending() {
        return this.list
            .sort((employee, nextEmployee) => {
                let res = nextEmployee.calcMonthIncome() - employee.calcMonthIncome();
                if (res === 0) {
                    return employee.name.localeCompare(nextEmployee.name);
                } else {
                    return res;
                }
            })
            .slice(0, 5)
            .map(employee => ({
                id: employee.id,
                name: employee.name,
                monthlyIncome: employee.calcMonthIncome()
            }));
    }

    leaderNames(list: IShortEmployee[]) {
        return list.map(employee => employee.name);
    }

    last3Ids(list: IShortEmployee[]) {
        return list
            .slice(-3)
            .map(employee => employee.id);
    }
}

const JSONFromApi = {
    data: {
        fixedPayentEmployees: [
            { id: 1, name: 'Vladimir P', fixedPayment: 900000 },
            { id: 2, name: 'Mark Z', fixedPayment: 1000000 },
            { id: 3, name: 'Bill G', fixedPayment: 3000000 },
            { id: 4, name: 'Anna V', fixedPayment: 30000 },
            { id: 5, name: 'Elena S', fixedPayment: 45000 },
            { id: 6, name: 'Petr R', fixedPayment: 60000},
            { id: 7, name: 'Yaroslav O', fixedPayment: 150000 },
            { id: 8, name: 'Tony S', fixedPayment: 4500000},
            { id: 9, name: 'Peter P', fixedPayment: 10000}
        ],
        hourlyPaymentEmployees: [
            { id: 11, name: 'Viktor D', hourlyPayment: 1500 },
            { id: 12, name: 'Darya L', hourlyPayment: 1000 },
            { id: 13, name: 'Natalya I', hourlyPayment: 850 },
            { id: 14, name: 'Dmitry M', hourlyPayment: 900 },
            { id: 15, name: 'Max S', hourlyPayment: 500 },
            { id: 16, name: 'Clark K', hourlyPayment: 600 },
            { id: 17, name: 'Barry A', hourlyPayment: 700 },
            { id: 18, name: 'Oliver Q', hourlyPayment: 20000 },
            { id: 19, name: 'Bruce W', hourlyPayment: 21000 },
        ]
    }
}

const fixedPayentEmployeeList = new EmployeeList(JSONFromApi.data.fixedPayentEmployees
    .map(employee => new FixedPaymentEmployee(employee)));
const orderedFixedPayentEmployee = fixedPayentEmployeeList.sortDescending();

console.log('OrderedFixedPayentEmployee', orderedFixedPayentEmployee);
console.log('Leaders', fixedPayentEmployeeList.leaderNames(orderedFixedPayentEmployee));
console.log('Last3 idxs', fixedPayentEmployeeList.last3Ids(orderedFixedPayentEmployee));

const hourlyPayentEmployeeList = new EmployeeList(JSONFromApi.data.hourlyPaymentEmployees
    .map(employee => new HourlyPaymentEmployee(employee)));
const orderedHourlyPayentEmployee = hourlyPayentEmployeeList.sortDescending();
console.log('OrderedFixedPayentEmployee', orderedHourlyPayentEmployee);
console.log('Leaders', hourlyPayentEmployeeList.leaderNames(orderedHourlyPayentEmployee));
console.log('Last3 idxs', hourlyPayentEmployeeList.last3Ids(orderedHourlyPayentEmployee));

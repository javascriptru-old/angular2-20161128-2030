interface IEmployee {
    id: number;
    name: string;
    calcMonthlyIncome(): number;
}

interface IShortEmployee {
    id: number;
    name: string;
    monthlyIncome: number;
}

interface IHourlyPaymentEmployee extends IEmployee {
    haurlyPayment: number;
}

interface IFixedPaymentEmployee extends IEmployee {
    fixedPayment: number;
}

interface IEmployeeList {
    sortDescending(): IShortEmployee[];
    leaders(list: IShortEmployee[]): string[];
    last3EmployeeIds(list: IShortEmployee[]): number[];
}

class HourlyPaymentEmployee implements IHourlyPaymentEmployee {
    id: number;
    name: string;
    haurlyPayment: number;

    calcMonthlyIncome() {
        return this.haurlyPayment * 20.8 * 8;
    }
}

class FixedPaymentEmployee implements IFixedPaymentEmployee {
    id: number;
    name: string;
    fixedPayment: number;

    calcMonthlyIncome() {
        return this.fixedPayment;
    }
}

class HourlyPaymentEmployeeList implements IEmployeeList {
    private list: HourlyPaymentEmployee[];
    
    sortDescending() {
        return this.list
            .sort((employee, nextEmployee) => {
                let res;
                if (res = employee.calcMonthlyIncome() - nextEmployee.calcMonthlyIncome() === 0) {
                    return employee.name.localeCompare(nextEmployee.name);
                } else {
                    return res;
                }
            })
            .map(employee => ({
                id: employee.id,
                name: employee.name,
                monthlyIncome: employee.calcMonthlyIncome()
            }));
    }

    leaders(list: IShortEmployee[]) {
        return list.slice(0, 5).map(employee => employee.name);
    }

    last3EmployeeIds(list: IShortEmployee[]) {
        return list.slice(-3).map(employee => employee.id);
    }
}
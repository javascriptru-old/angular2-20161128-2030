interface IEmployee {
    name: string;
    calcMonthlyIncome(): number;
}

interface IShortEmployee {
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
    name: string;
    haurlyPayment: number;

    calcMonthlyIncome() {
        return this.haurlyPayment * 20.8 * 8;
    }
}

class FixedPaymentEmployee implements IFixedPaymentEmployee {
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
                name: employee.name,
                monthlyIncome: employee.calcMonthlyIncome()
            }));
    }

    leaders(list: IShortEmployee[]) {
        return list.slice(0, 4);
    }


}
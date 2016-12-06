interface IEmpolyee {
    id: number;
    name: string;
    calculateMonthPayment():number;
}

abstract class Employee {
    id: number;
    name: string;
    static maxId: number = 0;

    constructor(name: string) {
        this.id = Employee.maxId++; 
        this.name = name;
    }
}

class FixPriceEmployee extends Employee implements IEmpolyee {
    monthCost: number;
     
    constructor(name: string, monthCost: number) {
        super(name);

        this.monthCost = monthCost;
    }

    calculateMonthPayment() { 
        return this.monthCost;
    }
}

class PerHourPriceEmployee extends Employee implements IEmpolyee  { 
    hourCost: number;
     
    constructor(name: string, hourCost: number) {
        super(name);

        this.hourCost = hourCost
    }

    calculateMonthPayment() { 
        return 20.8 * 8 * this.hourCost;
    }
}

let jsonData = `[
 { "name": "Пиппин", "cost": "100", "type": "fix" },
 { "name": "Мерри", "cost": "100", "type": "fix" }
]`;

let employees: Array<IEmpolyee> = [
    new FixPriceEmployee('Гэндальф', 1700),
    new FixPriceEmployee('Бильбо Бэггинс', 1660),
    new FixPriceEmployee('Боромир', 500),
    new PerHourPriceEmployee('Фродо', 10),
    new PerHourPriceEmployee('Сэм', 5),
];

for (let e of JSON.parse(jsonData))
{ 
    employees.push(e.type == "fix" ? new FixPriceEmployee(e.name, parseFloat(e.cost)) : new PerHourPriceEmployee(e.name, parseFloat(e.cost)));
}

//a
employees.sort((e1, e2) => {
	let delta = e2.calculateMonthPayment() - e1.calculateMonthPayment();
	if (delta != 0)
		return delta;

	return e1.name.localeCompare(e2.name);
});
console.log('a)all employees:')
for (let e of employees)
{
    console.log(`id:${e.id}, name:${e.name}, cost:${e.calculateMonthPayment()}`);
}

//b
console.log('b)top paument employee names:');
let topPayment = employees.slice(0, 5);
for (let t of topPayment)
{
    console.log(t.name);
}

//c
console.log('c)low payment employee ids:')
let lowPayment = employees.slice(-3);
for (let t of lowPayment)
{
    console.log(t.id);
}
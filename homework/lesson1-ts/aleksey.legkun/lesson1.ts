enum WorkType { Full, Part}

interface IRecipientSalaries{
  amount: number;
  workType: WorkType;
}

interface ISalaryCalculator{
    calc(recipientSalaries: IRecipientSalaries): number;
    toString(recipientSalaries: IRecipientSalaries): string;
}

class SalaryCalculator implements ISalaryCalculator { 
     calc(recipientSalaries: IRecipientSalaries): number {
        if (recipientSalaries.workType === WorkType.Full)
            return recipientSalaries.amount;
        return 20.8 * 8 * recipientSalaries.amount;
    }
     toString(recipientSalaries: IRecipientSalaries): string {
        return `#total:${this.calc(recipientSalaries)}`;
    }
}

interface IEmployee{
    id: number;
    caption: string;
    amount: number;
    workType: WorkType;
    toString(): string;
}

class Employee implements IEmployee, IRecipientSalaries {
    id: number;
    caption: string;
    amount: number;
    workType: WorkType;

    constructor(id: number, caption: string, amount: number, workType: WorkType = WorkType.Full) {
        this.id = id;
        this.caption = caption;
        this.amount = amount;
        this.workType = workType;
    }
    toString(): string {
        return `id:${this.id}, name:${this.caption}, amount:${this.amount}, workType:${WorkType[this.workType]}`;
    }
}


interface IViewer{
    show(data: string);
}
class Viewer { 
    show(data: string) {
        document.write(data);
        document.write("<br>");
    }
}

class SomeActionImpl {
    viewer: IViewer;
    salaryCalculator: ISalaryCalculator;
    employees: Array<IEmployee> = [];

    private getText(e: IEmployee)
    {
        return e.toString() + this.salaryCalculator.toString(e);
    }

    showAll() { 
        this.viewer.show("show all");
        for (let e of this.employees)
        {
            this.viewer.show(this.getText(e)) ;
        }
    };

    sort(){
        this.viewer.show("sort");
        this.employees.sort((e1, e2) => {
            let delta = this.salaryCalculator.calc(e2) - this.salaryCalculator.calc(e1);
            if (delta != 0)
                return delta;
            return e1.caption.localeCompare(e2.caption);
        });
    }

    showTop5() { 
        this.viewer.show("top 5");
        let top5 = this.employees.slice(0, 5);
        for (let e of top5)
        {
            this.viewer.show(this.getText(e)) ;
        }
    };

    showLast3() { 
        this.viewer.show("last 3");
        let last3 = this.employees.slice(-3);
        for (let e of last3)
        {
            this.viewer.show(this.getText(e)) ;
        }
    };

    addTestData() {
        this.employees.push(new Employee(1, "emp1", 100, WorkType.Full));
        this.employees.push(new Employee(2, "emp2", 200, WorkType.Full));
        this.employees.push(new Employee(3, "emp3", 10, WorkType.Part));
        this.employees.push(new Employee(4, "emp4", 12, WorkType.Part));
        this.employees.push(new Employee(5, "emp5", 90, WorkType.Full));
        this.employees.push(new Employee(6, "emp6", 5, WorkType.Part));
    }
    
    addFromJsonString(jsonData: string) {
        this.viewer.show("data from json"); 
        for (let e of JSON.parse(jsonData))
        { 
            let emp = new Employee(e.id, e.caption, e.amount, e.workType);
            this.employees.push(emp);
            this.viewer.show(this.getText(emp));
        }
    };
}

let someAction = new SomeActionImpl();
someAction.viewer = new Viewer();
someAction.salaryCalculator = new SalaryCalculator();
someAction.addTestData();
someAction.showAll();

let jsonEmp = `[
  {"id":11,"caption":"emp11","amount":7,"workType":1},
  {"id":12,"caption":"emp12","amount":95,"workType":0},
  {"id":13,"caption":"emp13","amount":17,"workType":1},
  {"id":14,"caption":"emp14","amount":55,"workType":0}
]`;
someAction.addFromJsonString(jsonEmp);
someAction.showAll();


someAction.sort();
someAction.showAll();
someAction.showTop5();
someAction.showLast3();


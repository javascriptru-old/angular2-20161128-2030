interface IWorker {
    id: number;
    name: string;
    salary: number;
    getSalary():number;
}

/**
 * Работник с фиксированой зарплатой
 */
class WorkerFix implements  IWorker { 
  id: number;
  name: string;
  salary: number;

  constructor(id: number, name: string, salary: number) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }
  getSalary() {
    return this.salary;
  }
}

/**
 * Работник с повременой зарплатой
 */
class WorkerTime implements IWorker {
  id: number;
  name: string;
  salary: number;
  constructor(id: number, name: string, salary: number) {
    this.id = id;
    this.name =name;
    this.salary = salary;
  }
  getSalary() {
    return 20.8 * 8 * this.salary ;
  }
}

/**
 * Класс чтоб распарсить json
 */
class WorkerAll {
  id: number;
  name:string;
  salary: number;
  typeSalary:string;
}

// получаем файл
declare var require: any;
let jsonData:Array<WorkerAll>  = require('./data.json');

let items:Array<IWorker>;

// преобразуем в наш интерфейс
/*
  на самом деле мне не нравиться должно быть как то красивей. чем через промежуточный класс
*/
items = jsonData.map((item) => {
  if (item.typeSalary == "fix")
  {
    return new WorkerFix(item.id, item.name, item.salary);
  } else {
    return new WorkerTime(item.id, item.name, item.salary);
  }

});

// данные если не с json
/*items.push( new WorkerFix(1,"Peter"));
items.push( new WorkerTime(2,"Vasya"));
items.push( new WorkerFix(3,"Misha"));
items.push( new WorkerTime(4,"Vanya"));
items.push( new WorkerFix(5,"Olya"));
items.push( new WorkerTime(6,"Kolya"));
*/

// сортируем
items.sort((a:IWorker, b:IWorker) => {
  if (a.getSalary() < b.getSalary()) return 1;
  if (a.getSalary() > b.getSalary() || (a.name < b.name)) return -1;
  return 1;
});

// задание а
console.log(`
---=== Задание а ===---`);
items.forEach((item, i, arr) => {
  console.log( `id: ${item.id}, name: ${item.name}, salary: ${item.getSalary()}`);
});

// задание b
console.log(`
---=== Задание b ===---`);
items.slice(0,5).forEach((item) => {
  console.log(`name: ${item.name}`);
});

// задание с
console.log(`
---=== Задание с ===---`);
items.slice(-3).forEach((item) => {
  console.log(`id: ${item.id}`);
});
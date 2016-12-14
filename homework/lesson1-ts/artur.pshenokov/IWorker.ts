export interface IWorker {
    id:string;
    name:string;
    rate:number;

    calculateSalary():number;
}
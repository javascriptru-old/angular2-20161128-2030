export interface IEmployee {
    id: number;
    name: string;
    payment: number;
    
    averagePay(): number;
}
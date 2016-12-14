import { InputDecorator } from './InputDecorator';

export class Input {
    inputs: any[];

    @InputDecorator()
    firstName: string;

    @InputDecorator()
    lastName: string;
}
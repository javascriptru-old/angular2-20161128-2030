//Написать декоратор свойства класса Input, который будет складывать все свойтсва помеченные этим декоратором в массив inputs класса.

class Input {
    static inputs: any[] = [];

    @inputDecorator
    public prop1: string;

    @inputDecorator
    public prop2: string;

    public prop3: string;

    constructor() {}
}

function inputDecorator(target, key) {
    target.constructor.inputs.push(key);
}

console.log(Input.inputs);

/**
 * 2. Написать декоратор свойства класса Input, который будет складывать все свойтсва помеченные этим декоратором в массив inputs класса.
 */
class Input {
    inputs: string[];

    @storeProp name: string;

    nickname: string;

    @storeProp age: number;

    constructor(name: string, nickname: string, age: number) {
        this.inputs = [];
        this.name = name;
        this.nickname = nickname;
        this.age = age;
    }
}

function storeProp(target: any, key: string): void {
    if (!target.inputs) Object.defineProperty(target, 'inputs', {
        value: [],
        enumerable: true
    });
    target.inputs.push(key);
}

let input1 = new Input('John', 'Johnyboy', 21);

console.log(input1);
console.log(input1['inputs']);

//Написать декоратор класса Component, который будет добавлять классу набор свойств, таких как
//{ changeDetection: 'default', encapsulation: 1, providers: [], selector: undefinded, styles: [], template: undefinded }

@extraProperties
class Component {
    public prop1: string;

    constructor(prop1: string) {
        this.prop1 = prop1;
    }

}

function extraProperties(constructor: Function) {
    return function (...arg) {
        constructor.call(this, ...arg);

        this.changeDetection = 'default';
        this.encapsulation = 1;
        this.providers = [];
        this.selector = undefined;
        this.styles = [];
        this.template = undefined;
    }
}

let a = new Component('aa');
let b = new Component('bb');

console.log(a);
console.log(b);

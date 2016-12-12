import {ClassDecoratorComponent} from './ClassDecoratorComponent';
import {PropertyDecoratorComponent} from './PropertyDecoratorComponent';

console.log('Task 1');
console.log('static properties:');
for (let key in ClassDecoratorComponent) {
    console.log(`${key} - ${ClassDecoratorComponent[key]}`);
}

console.log('instance properties:');
let obj:any = new ClassDecoratorComponent();
for (let key in obj) {
    console.log(`${key} - ${obj[key]}`);
}

console.log('Task 2');
let prop = new PropertyDecoratorComponent();

console.log(prop['inputs']);
import { homework2Part1 } from './homework';
import { homework2Part2 } from './homework';

let component = new homework2Part1.Component();

for (let key in component) {
    console.log(key + ' ' + component[key]);
}

let input = new homework2Part2.Input();

console.log(input['inputs']);
namespace homework2Part1 {
    @addProps
    export class Component {
        name = "same component";
    }

    function addProps(constructor: Function) {
        let definitions = {
            changeDetection: 'default',
            encapsulation: 1,
            providers: [],
            selector: undefined,
            styles: [],
            template: undefined
        }

        for (let prop in definitions) {
            Object.defineProperty(constructor.prototype, prop, {
                value: definitions[prop],
                enumerable: true,
                writable: true
            });
        }
    }

}

let component = new homework2Part1.Component();

for (let key in component) {
    console.log(key + ' ' + component[key]);
}

namespace homework2Part2 {

    export class Input {
        @marked
        name = "Andrey";
        @marked
        amount = 5000;
        n = 45;
        @marked
        func() {} 
    }

    function marked(target: any, key: string) {
        if (!target['inputs']) {
            Object.defineProperty(target, 'inputs', {
                value: [],
                enumerable: true,
                writable: true
            });
        } 

        target['inputs'].push( key );
    }
}

let input = new homework2Part2.Input();

console.log(input['inputs']);
export namespace decoratorComponent {
    @addPropertyesNew
    export class Component {
        public test: string ='test';
    }

    function addPropertyesNew(constructor: Function) {
        Object.defineProperties( constructor.prototype, {
            changeDetection: {
                value: 'default'
            },
            encapsulation: {
                value: 1,
                enumerable: true 
            },
            providers: {
                value: [],
                enumerable: true 
            },
            selector: {
                enumerable: true 
            },
            styles: {
                value: [],
                enumerable: true 
            },
            template: {
                enumerable: true 
            }
        }

        )
        console.log('ff');

    }
}
let a = new decoratorComponent.Component();
//console.log(a);
for(let key in a) {
    console.log(`Property name: ${key} value: ${a[key]}`);  
}

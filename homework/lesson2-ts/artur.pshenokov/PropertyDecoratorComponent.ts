export class PropertyDecoratorComponent {
    //TODO: inputs: Array<any> = []; how to fill if property already exists
    // check 2 cases: if property is static : fill with target.constructor
    // and property is not static: fill with target.prototype
    @input
    name:string = 'Artur';
    @input
    age:number = 65;
    @input
    city:string = 'London';
}

function input(target:any, propertyKey:string) {
    if (!target['inputs']) {
        target.inputs = [];
    }
    target['inputs'].push(propertyKey);
}


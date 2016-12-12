function extra(constructor:Function) {
    //static declaration
    constructor['type'] = 'static';
    constructor['changeDetection'] = 'default';
    constructor['encapsulation'] = 1;
    constructor['providers'] = [];
    constructor['selector'] = undefined;
    constructor['styles'] = [];
    constructor['template'] = undefined;
    // instance declaration
    constructor.prototype['type'] = 'instance';
}

@extra
export class ClassDecoratorComponent {
}




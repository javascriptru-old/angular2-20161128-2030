type props = {
    changeDetection: string,
    encapsulation: number,
    providers: string[],
    selector: string,
    styles: string[],
    template: string
}

export function AddProps(definitions: props) {
    return function (constructor: Function) {
        for (let prop in definitions) {
            Object.defineProperty(constructor.prototype, prop, {
                value: definitions[prop],
                enumerable: true,
                writable: true
            });
        }
    }
}
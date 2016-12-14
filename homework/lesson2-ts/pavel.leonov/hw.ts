/* ==== 1 ==== */

interface IExtentionOptions {
    changeDetection?: string
    encapsulation?: number,
    providers?: Function[],
    selector?: string,
    styles?: string[],
    template?: string
}

function Extention (options?: IExtentionOptions) {
    const defaultOptions = {
        changeDetection: 'default',
        encapsulation: 1,
        providers: [],
        selector: void 0,
        styles: [],
        template: void 0
    };
    return target => Object.assign(target.prototype, defaultOptions, options);
}

@Extention()
class ExtendedDefault {

}

@Extention({
    template: `<div class="app">....</div>`
})
class Extended {

}

console.log('ExtendedDefault', ExtendedDefault);
console.log('Extended', Extended);

/* ==== 2 ==== */
function input (target: Input, prop: string) {
    if (!target.inputs) target.inputs = [];
    console.log(target, prop);
    target.inputs.push(prop);
};

class Input {
    public inputs: string[];

    @input
    onInput() {}
}

console.log((new Input).inputs);
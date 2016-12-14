function component(target: Function) {
    if(!target.prototype.changeDetection) {
        Object.defineProperty(target.prototype, "changeDetection", {
            value: "default"
        });
    }
    if(!target.prototype.encapsulation) {
        Object.defineProperty(target.prototype, "encapsulation", {
            value: 1
        });
    }
    if(!target.prototype.providers) {
        Object.defineProperty(target.prototype, "providers", {
            value: [],
            enumerable: true
        });
    }
    if(!target.prototype.selector) {
        Object.defineProperty(target.prototype, "selector", { });
    }
    if(!target.prototype.styles) {
        Object.defineProperty(target.prototype, "styles", {
            value: [],
            enumerable: true
        });
    }
    if(!target.prototype.template) {
        Object.defineProperty(target.prototype, "template", { });
    }

}

function input(target: any, key: string):void {
    if (!target.inputs) {
        Object.defineProperty(target, "inputs", {
            value: [],
            enumerable: true,
            configurable: true
        });
    }
    target.inputs.push(key);
}

@component
class Message {
    @input
    subject: string;
    
    @input
    text: string;

    constructor(subject:string, text:string) {
        this.subject = subject;
        this.text = text;
    }
}

var t = new Message("Hello", "This is test");
console.log(t);
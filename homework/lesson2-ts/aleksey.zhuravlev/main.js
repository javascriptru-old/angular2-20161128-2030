var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function component(target) {
    if (!target.prototype.changeDetection) {
        Object.defineProperty(target.prototype, "changeDetection", {
            value: "default"
        });
    }
    if (!target.prototype.encapsulation) {
        Object.defineProperty(target.prototype, "encapsulation", {
            value: 1
        });
    }
    if (!target.prototype.providers) {
        Object.defineProperty(target.prototype, "providers", {
            value: [],
            enumerable: true
        });
    }
    if (!target.prototype.selector) {
        Object.defineProperty(target.prototype, "selector", {});
    }
    if (!target.prototype.styles) {
        Object.defineProperty(target.prototype, "styles", {
            value: [],
            enumerable: true
        });
    }
    if (!target.prototype.template) {
        Object.defineProperty(target.prototype, "template", {});
    }
}
function input(target, key) {
    if (!target.inputs) {
        Object.defineProperty(target, "inputs", {
            value: [],
            enumerable: true,
            configurable: true
        });
    }
    target.inputs.push(key);
}
var Message = (function () {
    function Message(subject, text) {
        this.subject = subject;
        this.text = text;
    }
    return Message;
}());
__decorate([
    input,
    __metadata("design:type", String)
], Message.prototype, "subject", void 0);
__decorate([
    input,
    __metadata("design:type", String)
], Message.prototype, "text", void 0);
Message = __decorate([
    component,
    __metadata("design:paramtypes", [String, String])
], Message);
var t = new Message("Hello", "This is test");
console.log(t);

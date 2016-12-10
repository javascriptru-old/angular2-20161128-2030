"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var lesson2;
(function (lesson2) {
    var Input = (function () {
        function Input() {
            //inputs: Array<string> = new Array<string>();
            this.changeDetection = 'default';
            this.encapsulation = 1;
            this.selector = false;
        }
        __decorate([
            propertyName
        ], Input.prototype, "changeDetection", void 0);
        __decorate([
            propertyName
        ], Input.prototype, "providers", void 0);
        __decorate([
            propertyName
        ], Input.prototype, "styles", void 0);
        return Input;
    }());
    lesson2.Input = Input;
    function propertyName(target, key) {
        if ("inputs" in target) { }
        else {
            Object.defineProperty(target, "inputs", { value: [], writable: true });
        }
        if (target["inputs"].indexOf(key) === -1) {
            target["inputs"].push(key);
        }
    }
})(lesson2 = exports.lesson2 || (exports.lesson2 = {}));
var input = new lesson2.Input();
console.log(input["inputs"]);

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var decoratorComponent;
(function (decoratorComponent) {
    var Component = (function () {
        function Component() {
            this.test = 'test';
        }
        Component = __decorate([
            addPropertyesNew
        ], Component);
        return Component;
    }());
    decoratorComponent.Component = Component;
    function addPropertyesNew(constructor) {
        Object.defineProperties(constructor.prototype, {
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
        });
        console.log('ff');
    }
})(decoratorComponent = exports.decoratorComponent || (exports.decoratorComponent = {}));
var a = new decoratorComponent.Component();
//console.log(a);
for (var key in a) {
    console.log("Property name: " + key + " value: " + a[key]);
}

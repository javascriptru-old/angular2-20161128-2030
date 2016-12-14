'use strict';

declare var require: any;

/**
 * 1. Написать декоратор класса Component, который будет добавлять классу набор свойств, таких как
 * {
 *     changeDetection: 'default',
 *     encapsulation: 1,
 *     providers: [],
 *     selector: undefinded,
 *     styles: [],
 *     template: undefinded
 * }
 */


@decoratorClass
class Component {}

function decoratorClass(target: any): any {
    /*
    target.prototype.changeDetection = 'default 12345';
    target.prototype.encapsulation = 1;
    target.prototype['providers'] = [];
    target.prototype['selector'] = undefined;   // ??
    Object.defineProperty(target.prototype, 'selector', {value: 'assa'});
    target.prototype['styles'] = [];
    target.prototype['template'] = undefined;   // ??
    */
    Object.defineProperties(target.prototype, {
        changeDetection: { value: 'default', enumerable: true },
        encapsulation: { value: 1, enumerable: true },
        providers: { value: [], enumerable: true },
        selector: { enumerable: true },
        styles: { value: [], enumerable: true },
        template: { enumerable: true }
    });
    return target;
}

let component = new Component();

console.log(`component.changeDetection = ${component['changeDetection']}`);
console.log('component[\'encapsulation\'] = ' + component['encapsulation']);
console.log('component.providers = ' + component.providers);
console.log(`component.selector = ${component.selector}`);
console.log('component[\'styles\'] = ' + component['styles']);
console.log('component.template = ' + component.template);

/* Ошибки при компилции:
  component.ts(46,50): error TS2339: Property 'providers' does not exist on type 'Component'.
  component.ts(47,47): error TS2339: Property 'selector' does not exist on type 'Component'.
  component.ts(49,49): error TS2339: Property 'template' does not exist on type 'Component'.

  Скомпилированый JS работает без ошибок

  Почему в TS к добавленным свойствам нельзя обращаться через точку? Баг?
*/

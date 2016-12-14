class Component {

    @input(Component)        // Так как в targetом становится прототип класса а не сам класс приходится передавать класс в декоратор
    prop1:string = 'test1';  // свойства на этапе запуска декоратора не существуют, чтобы они появились прийдется сделать экземпляр класса

    @input(Component)
    prop2:string = 'test2';

}

console.log('Collected inputs: ', Component.inputs);

function input(passedTarget:object) {
    return function(target:object, key:string) {
        passedTarget.inputs = passedTarget.inputs || [];  // небольшой изврат, у класса нет свойств в этот момент, добавляю вручную
        passedTarget.inputs.push(key);
    }
}


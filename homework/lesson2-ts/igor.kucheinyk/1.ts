@addProperties({
    changeDetection: 'default',
    encapsulation: 1,
    providers: [],
    //selector: undefinded,
    styles: [],
    //template: undefinded
})
class Component {
}

console.log('Component properties: ', Object.keys(Component));

function addProperties(oArgs:object) {
    return function(target:object) {
        for (let key in oArgs) {
            target[key] = oArgs[key];
        }
    }
}
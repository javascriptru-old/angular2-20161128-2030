export namespace homework2 {
  @addFeatures
  export class Component {
    desc: string = "It's test class that will be extended."
  }

  function addFeatures(constructor: Function) {
    constructor['changeDetection'] = 'default'
    constructor['encapsulation'] = 1
    constructor['providers'] = []
    constructor['styles'] = []
    constructor['selector'] = undefined
    constructor['template'] = undefined
  }
}


let a = new homework2.Component;
console.log(a);


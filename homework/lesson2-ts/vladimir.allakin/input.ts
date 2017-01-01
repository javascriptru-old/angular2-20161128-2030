export namespace homework2 {
  type role = "select" | "input"; 
  
  export class Input {
    static inputs: Array<Object>[] = [];

    notAddedProp: string = 'This not added';
    constructor() {

    }
    @addProp
    length: number = 5;

    @addProp
    typeOfInput: role = "select";

    @addProp
    somOther: string = 'blabla'
  }

  function addProp(target: any, propertyKey: string):void {
    target.constructor.inputs.push(propertyKey);
  }
}

console.log(homework2.Input.inputs);

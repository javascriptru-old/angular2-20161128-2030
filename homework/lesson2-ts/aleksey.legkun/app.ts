

 @component
class ForTest{
    a: number = 10;
    callM(s: string): string 
    {
      return "fff";
    }
  }

  function component(target: Function) {
    target["changeDetection"] = 'default';
    target["encapsulation"] = 1.45;
    target["providers"] = [];
    target["selector"] = undefined;
    target["styles"] = [];
    target["template"] = undefined;
    target["template"] ;
    target["someFunc"] = function(s: string):string {return s;} 
  }


class Input{
    static inputs: Array<Object>[] = [];

    someNumber: number = 55;
    @inputProp('inputs')
    s: string;

    @inputProp('inputs')
    a: number = 10;
    
    @inputProp('inputs')
    callM1(s: string): string 
    {
      return "fff";
    }

    callM2(s: string): string 
    {
      return "fff";
    }
  }

function inputProp(propToStore : string) {
    return function(target: any, propertyKey: string):void {
    if(!target.constructor.hasOwnProperty(propToStore)){
       throw new Error(`not found static array ${propToStore}`);
    }
    target.constructor[propToStore].push(propertyKey);
    }
}



{
   console.log('task1');
    let a: any = ForTest;
    console.log(`${a.name}`);
    for (let key in a) {
        console.log(`${key} - ${Object.prototype.toString.call(a[key])} -  ${a[key]}`);
    }
}      

{
    console.log('task2');
    for (let key in Input.inputs) {
        console.log(`${Input.inputs[key]}`);
    }
}
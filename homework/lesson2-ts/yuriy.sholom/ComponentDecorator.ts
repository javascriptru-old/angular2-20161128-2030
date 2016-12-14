export function ComponentDecorator(callbackObject: any): Function {
    return (target: Function) => {
       for (let obj in callbackObject) {
           if (callbackObject.hasOwnProperty(obj)) {
               target.prototype[obj] = callbackObject[obj];
           }
       }
    }
}
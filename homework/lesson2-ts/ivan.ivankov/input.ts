export namespace lesson2 {
    export class Input {
        //inputs: Array<string> = new Array<string>();

        @propertyName
        changeDetection: string = 'default';
        
        encapsulation: number = 1;
        
        @propertyName
        providers: Array<number>;
        
        selector: boolean = false;
        
        @propertyName
        styles: Array<string>;
        
        template: {};
    }

    function propertyName(target: any, key: string) {
            if ("inputs" in target)
            {} else {
                Object.defineProperty(target,"inputs"
                , {value:[], writable: true})
            }

            if (target["inputs"].indexOf(key) === -1) {
                target["inputs"].push(key);
            }
        }
}

let input = new lesson2.Input();
console.log(input["inputs"]);
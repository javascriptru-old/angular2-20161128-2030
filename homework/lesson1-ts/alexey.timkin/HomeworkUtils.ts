export class HomeworkUtils {
    static copyProperties<T>(targetObject: T, sourceObject: any) : T {
        for (var propName in sourceObject) {
            targetObject[propName] = sourceObject[propName]
        }
        return targetObject;
    }

    static printObjectArray(objects: any[], propertyNames: string[], columnWidths: number[], indentation:number) {
        const indentationPadding: string = Array(indentation + 1).join(" ");
        let separatorRow:string = "+";
        for (let index=0; index<propertyNames.length; index++) {
            separatorRow += Array(columnWidths[index] + 1).join("-")+"+";
        }
        console.log(indentationPadding+separatorRow);
        let toPrint:string = "|";
        for (let index=0; index<propertyNames.length; index++) {
            toPrint += propertyNames[index]+Array(columnWidths[index]-propertyNames[index].length + 1).join(" ")+"|";
        }
        console.log(indentationPadding+toPrint);
        console.log(indentationPadding+separatorRow);
        for (const object of objects) {
            HomeworkUtils.printObjectRow(object, propertyNames, columnWidths, indentation);
        }
        console.log(indentationPadding+separatorRow);
    }

    static printObjectRow(object: any, propertyNames: string[], columnWidths: number[], indentation:number) {
        let toPrint:string = "|";
        for (let index=0; index<propertyNames.length; index++) {
            let propertyValue: string = object[propertyNames[index]].toString();
            toPrint += propertyValue+Array(columnWidths[index]-propertyValue.length + 1).join(" ")+"|";
        }
        console.log(Array(indentation + 1).join(" ")+toPrint);
    }

    static printObject(object: any, propertyNames: string[], indentation:number) {
        let toPrint:string;
        for (const propertyName of propertyNames) {
            toPrint = (toPrint ? toPrint+ "; " : "")+propertyName+":"+object[propertyName];
        }
        console.log(Array(indentation + 1).join(" ")+toPrint);
    }
}
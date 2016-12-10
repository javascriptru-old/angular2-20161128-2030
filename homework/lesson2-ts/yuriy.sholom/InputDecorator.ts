let properties: any[] = [];

export function InputDecorator(): Function {
    return (target: any, key: string): void => {
         properties.push(key);

         Object.defineProperty(target, 'inputs', {
            value: properties,
            writable: true,
        })
    }
}
export function Marked(target: any, key: string) {
    target['inputs'] = target['inputs'] || [];
    target['inputs'].push(key);
}
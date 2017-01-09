import { Observable }   from 'rxjs/Observable';
 export interface ITypeahead{
     getTypeaheadList(filter : string, maxItems: number): Observable<string[]>;
}
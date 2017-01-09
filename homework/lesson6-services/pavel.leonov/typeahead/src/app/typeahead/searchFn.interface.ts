import { Observable } from 'rxjs/Observable';
import { ITypeaheadResult } from './result.interface';

export interface ISearchFn {
  (query: string): Observable<ITypeaheadResult[]>
}

import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

export abstract class CollectionService {

    constructor(public http: Http) {
    }

    public readonly collectionName: string;

    public getAll<T>():Observable<T> {
        return this.http.get(`http://test-api.javascript.ru/v1/ikucheinyk/${this.collectionName}`).map(rsp => rsp.json());
    }

    public getAllWithCondition<T>(field:string, value:any):Observable<T> {
        return this.http.get(`http://test-api.javascript.ru/v1/ikucheinyk/${this.collectionName}`)
            .map(rsp => rsp.json().filter(item => item[field]==value));
    }

    public getOne<T>(id: number): Observable<T> {
        return this.http.get(`http://test-api.javascript.ru/v1/ikucheinyk/${this.collectionName}/${id}`).map(rsp => rsp.json());
    }
}
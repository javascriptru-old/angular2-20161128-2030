import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, URLSearchParams, Response } from '@angular/http';
import { Component } from '@angular/core';
import { ITypeaheadResult } from './typeahead/result.interface';
import { ISearchFn } from './typeahead/searchFn.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchGithubUser: ISearchFn;

  constructor(public http: Http) {
    this.searchGithubUser = this._searchGithubUser.bind(this);
  }

  _searchGithubUser(name: string): Observable<ITypeaheadResult[]> {
    const search = new URLSearchParams;
    search.set('q', name);
    return this.http
      .get('https://api.github.com/search/users', { search })
      .map((response: Response) => {
        return response.json().items.map((user) => ({
          title: user.login,
          avatar: user.avatar_url
        }));
      })
  }

}

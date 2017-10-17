import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {User} from "../../models/users";

/*
 Generated class for the GithubUsersProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class GithubUsers {

  githubApiUrl = 'https://api.github.com';

  constructor(public http: Http) { }

  load(): Observable<User[]> {
    return this.http.get(this.githubApiUrl + '/users')
      .map(res => <User[]>res.json());
  }

  loadDetails(login: string): Observable<User[]> {
    return this.http.get(this.githubApiUrl + '/users' + '/'+ login)
      .map(res => <User[]>res.json());
  }

}

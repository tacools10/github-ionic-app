import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Article} from "../../models/articles";

/*
  Generated class for the NewsStoriesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsStoriesProvider {

  newsApiUrl = "https://newsapi.org/v1/articles?source=";
  apiKey = "22bde7a6ca9949be88463a4efbd9a952";

  constructor(public http: Http) {}

  load(): Observable<Article[]> {
    return this.http.get(this.newsApiUrl + "Bloomberg&sortBy=top&apiKey=" + this.apiKey)
      .map(res => <Article[]>res.json().articles);
  }

}

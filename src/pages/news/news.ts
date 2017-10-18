import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {NewsStoriesProvider} from "../../providers/news-stories/news-stories";
import {Article} from "../../models/articles";
import {InAppBrowser} from "@ionic-native/in-app-browser";

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  articles: Article[];

  constructor(public navCtrl: NavController, private newsStories: NewsStoriesProvider,
              public platform: Platform) {
    newsStories.load().subscribe(articles => {
      this.articles = articles;
      // console.log(this.articles); this is working so API call is good
    })
  }

  openUrl(url: string) {

    this.platform.ready().then(() => {
      console.log("inside");
      let iab = new InAppBrowser;
      iab.create(url);
    });

  }

}

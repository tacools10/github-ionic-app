import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Article} from "../../models/articles";
import {NewsStoriesProvider} from "../../providers/news-stories/news-stories";

/**
 * Generated class for the NewsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-details',
  templateUrl: 'news-details.html',
})
export class NewsDetailsPage {

  article: Article;
  string: String;


  constructor(public navCtrl: NavController, public navParams: NavParams, private newsStories: NewsStoriesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDetailsPage');
  }

}

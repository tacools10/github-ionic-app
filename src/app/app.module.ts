import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {OrganisationsPage} from "../pages/organisations/organisations";
import {ReposPage} from "../pages/repos/repos";
import {UsersPage} from "../pages/users/users";
import {GithubUsers} from '../providers/github-users/github-users';
import {HttpModule} from "@angular/http";
import {UserDetailsPage} from "../pages/user-details/user-details";
import {NewsPage} from "../pages/news/news";
import { NewsStoriesProvider } from '../providers/news-stories/news-stories';

@NgModule({
  declarations: [
    MyApp,
    OrganisationsPage,
    ReposPage,
    UsersPage,
    UserDetailsPage,
    NewsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OrganisationsPage,
    ReposPage,
    UsersPage,
    UserDetailsPage,
    NewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubUsers,
    NewsStoriesProvider
  ]
})
export class AppModule {}

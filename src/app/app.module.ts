import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { RestMealsPage } from '../pages/rest-meals/rest-meals'
import { RequestsPage } from '../pages/requests/requests';
import { MealsPage } from '../pages/meals/meals';
import { OrderPage } from '../pages/order/order';
import { DelivaryPage } from '../pages/delivary/delivary';
import { HandPickPage } from '../pages/hand-pick/hand-pick';
import { UserHomePage } from '../pages/user-home/user-home';
import { SignInPage } from '../pages/sign-in/sign-in';

var firebaseConfig = {
  apiKey: "AIzaSyBnH6BJVQHmst0wH2in3G4ftWxG2-m5r34",
  authDomain: "fireapp-14c15.firebaseapp.com",
  databaseURL: "https://fireapp-14c15.firebaseio.com",
  projectId: "fireapp-14c15",
  storageBucket: "fireapp-14c15.appspot.com",
  messagingSenderId: "374147991168"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RestMealsPage,
    RequestsPage,
    MealsPage,
    OrderPage,
    DelivaryPage,
    HandPickPage,
    UserHomePage,
    SignInPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicPageModule.forChild(RestMealsPage),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RestMealsPage,
    RequestsPage,
    MealsPage,
    OrderPage,
    DelivaryPage,
    HandPickPage,
    UserHomePage,
    SignInPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

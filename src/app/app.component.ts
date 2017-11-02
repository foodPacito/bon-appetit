import { SignUpPage } from './../pages/sign-up/sign-up';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav, MenuController, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { MapPage } from '../pages/map/map';
import { UserHomePage } from '../pages/user-home/user-home';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignInPage } from '../pages/sign-in/sign-in';

@Component({
  templateUrl: 'app.html'  
})

export class MyApp {
  rootPage: any = SignUpPage;
  @ViewChild(Nav) nav: Nav;

  // UserHomePage = UserHomePage;
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private angularFireAuth: AngularFireAuth,
    public loadingCtrl: LoadingController,
    public menu: MenuController    
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
  presentLoadingCrescent () {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Siging out, please wait',
      duration: 500
    });
    loading.present();
  }

  signOut() {
    this.angularFireAuth.auth.signOut()
    this.presentLoadingCrescent();
    this.nav.setRoot(SignInPage);
    this.menu.close();
  }

}

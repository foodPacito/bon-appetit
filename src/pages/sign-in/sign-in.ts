import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  
  fbLoggedIn: boolean = false;
  gLoggedIn: boolean = false;
  LoggedIn: boolean = this.gLoggedIn || this.fbLoggedIn;
  fbData;
  fbAuth = new firebase.auth.FacebookAuthProvider();
  gAuth = new firebase.auth.GoogleAuthProvider();  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public angularFireAuth: AngularFireAuth,
    public changeDetector: ChangeDetectorRef) {
  }

  ionViewDidLoad() {
  }

  fbLogin() {
    this.fbAuth.addScope('user_friends');    
    this.angularFireAuth.auth.signInWithPopup(this.fbAuth).then(res => {
      this.fbLoggedIn = true;
      this.fbData = res;
      this.changeDetector.detectChanges();
    }).catch(err => {
      console.log('error =======> ' + err);
    });
  }
  fbLogout() {
    this.angularFireAuth.auth.signOut().catch(console.log);
    this.fbLoggedIn = false;
    this.changeDetector.detectChanges();
  }

  googleLogin() {
    this.angularFireAuth.auth.signInWithPopup(this.gAuth).then(res => {
      this.gLoggedIn = true;
      this.changeDetector.detectChanges();
    }).catch(console.log);
  }
  googleLogout() {
    this.angularFireAuth.auth.signOut().catch(console.log);
    this.changeDetector.detectChanges();
  }
}

import { Component } from '@angular/core';
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
  googleLogedin: boolean = false;
  fbData;
  googledata;
  googlprovider = new firebase.auth.GoogleAuthProvider();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public angularFireAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  fbLogin() {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res => {
      this.fbLoggedIn = true;
      this.fbData = res;
    })
  }

  fbLogout() {
    this.angularFireAuth.auth.signOut();
    this.fbLoggedIn = false;
  }

  googleLogin(){
    this.angularFireAuth.auth.signInWithPopup(this.googlprovider).then(res=>{
      this.googleLogedin=true;
      this.googledata=res;
      console.log('login from google')
      console.log(res);
    })
  }

  googleLogout(){
    this.angularFireAuth.auth.signOut()
    this.googleLogedin = false;
    console.log('logout from google')
  }  

}

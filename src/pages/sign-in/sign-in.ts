import { Component, ChangeDetectorRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';
import { UserHomePage } from '../user-home/user-home';
import {Md5} from 'ts-md5/dist/md5';
import { MapPage } from '../map/map';

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
  name ;
  email ;
  password ;
  itemsRef;
  fbLoggedIn: boolean = false;
  googleLogedin: boolean = false;
  loggedin: boolean = false;
  fbData;
  googledata;
  obj={
    username: this.name,
    email: this.email,
    password: this.password
  }
  
  restaurantsList = []; 
  fbAuth = new firebase.auth.FacebookAuthProvider();
  googlprovider = new firebase.auth.GoogleAuthProvider();
  EmailAuth=new firebase.auth.EmailAuthProvider();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    
    public angularFireAuth: AngularFireAuth,
    public changeDetector: ChangeDetectorRef,
    private db: AngularFireDatabase,
    private toast: ToastController) {
  }

     MarkerMap(){
      this.navCtrl.push(MapPage);
     }
  ionViewDidLoad() {
    this.db.list('/restaurants').valueChanges().subscribe( data => {
    if (this.restaurantsList.length === 0){
      console.log(data)
      console.log('=============================')
      for (var i = 0; i < data.length; i++){
        this.restaurantsList.push([data[i]['name'],data[i]['email']])
        console.log(this.restaurantsList)
      }
    }
    })
  
  }

  fbLogin() {
    this.fbAuth.addScope('user_friends');    
    this.angularFireAuth.auth.signInWithPopup(this.fbAuth).then(res => {
      console.log(res)
      this.fbLoggedIn = true;
      this.fbData = res;
      console.log(res)
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


  googleLogin(){
    console.log(this.restaurantsList)
    this.angularFireAuth.auth.signInWithPopup(this.googlprovider).then(res=>{
    this.googleLogedin=true;
    this.googledata=res;
    console.log('login from google')
    console.log(res.user.email);
    this.changeDetector.detectChanges();
    for (var i = 0; i < this.restaurantsList.length; i++){
      console.log('hi')
      if (res.user.email === this.restaurantsList[i][1]){
        console.log('found it')
        console.log(this.restaurantsList[i][0])
        this.navCtrl.setRoot(HomePage, {
          restName: this.restaurantsList[i][0]
        })
      }
    }
    })
  }

  googleLogout() {
    this.angularFireAuth.auth.signOut()
    this.googleLogedin = false;
    console.log('logout from google');
    this.changeDetector.detectChanges();
  }

  emailSignUp() {
    this.password=Md5.hashStr(this.password);
    this.angularFireAuth.auth.createUserWithEmailAndPassword(this.email,this.password).then(signUpData=>{
      this.itemsRef = this.db.list('Users');
      this.itemsRef.push(
        { firstName: this.name,
          email: this.email,
          password: this.password
        })
      this.navCtrl.push(UserHomePage)
    }).catch(err => {
      this.toast.create({
          message: err.message,
          duration: 6000
      }).present();
      });
  }
  emailSignIn(){
    this.password=Md5.hashStr(this.password);
    this.angularFireAuth.auth.signInWithEmailAndPassword(this.email,this.password).then(signedInData => {
      this.loggedin = true;    
      this.navCtrl.push(UserHomePage);
    }).catch(err => {
      console.log(err);
      this.toast.create({
        message: err.message,
        duration: 6000
      }).present(); 
    });
    
  }

    emailSignOut(){
      this.angularFireAuth.auth.signOut()
      this.loggedin = false;
      this.changeDetector.detectChanges()
    }
}
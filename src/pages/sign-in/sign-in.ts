import { Component, ChangeDetectorRef, ViewChild, trigger, state, style, transition, animate, keyframes} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';
import { UserHomePage } from '../user-home/user-home';
import { Md5 } from 'ts-md5/dist/md5';
import { MapPage } from '../map/map';
import { SignUpPage } from '../sign-up/sign-up';
import { FacebookPage } from '../facebook/facebook';

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
  // animations: [
  //   //For the logo
  //   trigger('flyInBottomSlow', [
  //     state('in', style({
  //       transform: 'translate3d(0,0,0)'
  //     })),
  //     transition('void => *', [
  //       style({transform: 'translate3d(0,2000px,0'}),
  //       animate('1500ms ease-in-out')
  //     ])
  //   ]),
  //   //For the background detail
  //   trigger('flyInBottomFast', [
  //     state('in', style({
  //       transform: 'translate3d(0,0,0)'
  //     })),
  //     transition('void => *', [
  //       style({transform: 'translate3d(0,2000px,0)'}),
  //       animate('700ms ease-in-out')
  //     ])
  //   ]),
  //   //For the login form
  //   trigger('bounceInBottom', [
  //     state('in', style({
  //       transform: 'translate3d(0,0,0)'
  //     })),
  //     transition('void => *', [
  //       animate('1500ms 200ms ease-in', keyframes([
  //         style({transform: 'translate3d(0,2000px,0)', offset: 0}),
  //         style({transform: 'translate3d(0,-20px,0)', offset: 0.9}),
  //         style({transform: 'translate3d(0,0,0)', offset: 1})
  //       ]))
  //     ])
  //   ]),
  //   //For login button
  //   trigger('fadeIn', [
  //     state('in', style({
  //       opacity: 1
  //     })),
  //     transition('void => *', [
  //       style({opacity: 0}),
  //       animate('1000ms 2000ms ease-in')
  //     ])
  //   ])
  // ]
})

export class SignInPage {
  email ;
  password ;
  restName;
  restaurantsList = []; 
  usersList = [];
  EmailAuth=new firebase.auth.EmailAuthProvider();
  ///////////Siraj
  logoState: any = "in";
  cloudState: any = "in";
  loginState: any = "in";
  formState: any = "in";
  ///////////////Siraj
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public angularFireAuth: AngularFireAuth,
    public changeDetector: ChangeDetectorRef,
    private db: AngularFireDatabase,
    private toast: ToastController,
    private fb: Facebook,
    public menu: MenuController) {}

  ionViewDidLoad() {
    this.db.list('/restaurants').valueChanges().subscribe( data => {
      if (this.restaurantsList.length === 0){
        for (var i = 0; i < data.length; i++){
          this.restaurantsList.push([data[i]['name'],data[i]['email']])
        }
      }

        this.db.list('Users').valueChanges().subscribe( data => {
          if (data.length  > 0)
         for (var i =0; i < data.length; i++){
           this.usersList.push(data[i]['email'])
         }
        })
    })
  }

  fbLogin() {
    this.fb.login(['email'])
    .then((res) => {
      const fc = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken)
      firebase.auth().signInWithCredential(fc).then(fs => {
        for (var i = 0; i < this.restaurantsList.length; i++){
          if (fs.email === this.restaurantsList[i][1]){
            this.restName = this.restaurantsList[i][0]
            this.navCtrl.setRoot(HomePage, {
              restName: this.restName
            })
          }
        }

        for (var i = 0; i < this.usersList.length; i++){
          if (fs.email === this.usersList[i]){
            this.navCtrl.setRoot(UserHomePage, {
              email: fs.email
            })
          }
        }
        ///////// Firas \\\\\\\\\
        this.navCtrl.setRoot(FacebookPage, {
          fc: fc
        })
        //////////Firas\\\\\\\\\\

        
      }).catch(ferr => {
          alert ('firebase err')
        })
    })
    .catch(e => console.log('Error logging into Facebook', e));
      
  }
   
  emailSignIn(){
    //////////Firas\\\\\\\\\\
    if (!this.email){
      let toast = this.toast.create({
        message: 'You need to fill your email first',
        duration: 3000,
        position: 'top'
      });
      toast.present();
      return
    } else if (!this.password){
      let toast = this.toast.create({
        message: 'You need to fill your password first',
        duration: 2000,
        position: 'top'
      });
      toast.present();
      return
    }
    //////////Firas\\\\\\\\\\

    this.angularFireAuth.auth.signInWithEmailAndPassword(this.email,this.password).then(signedInData => {
      this.navCtrl.setRoot(UserHomePage, {
        email: this.email
      });
    }).catch(err => {
      this.toast.create({
        message: err.message,
        duration: 6000
      }).present(); 
    });
  }

  signUp(){
    this.navCtrl.setRoot(SignUpPage)
  }
}
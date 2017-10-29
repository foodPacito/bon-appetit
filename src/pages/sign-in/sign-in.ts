import { Component, ChangeDetectorRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';
import { UserHomePage } from '../user-home/user-home';
import { Md5 } from 'ts-md5/dist/md5';
import { MapPage } from '../map/map';
import { SignUpPage } from '../sign-up/sign-up';

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
  
})

export class SignInPage {
  email ;
  password ;
  restName;
  restaurantsList = []; 
  usersList = [];
  EmailAuth=new firebase.auth.EmailAuthProvider();
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public angularFireAuth: AngularFireAuth,
    public changeDetector: ChangeDetectorRef,
    private db: AngularFireDatabase,
    private toast: ToastController,
    private fb: Facebook) {
  }

    //  MarkerMap(){
    //   this.navCtrl.push(MapPage);
    //  }
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
    this.fb.login(['email'])
    .then((res) => {
      const fc = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken)
      firebase.auth().signInWithCredential(fc).then(fs => {
        for (var i = 0; i < this.restaurantsList.length; i++){
          if (fs.email === this.restaurantsList[i][1]){
            console.log('found it')
            console.log(this.restaurantsList[i][0])
            this.restName = this.restaurantsList[i][0]
            this.navCtrl.setRoot(HomePage, {
              restName: this.restName
            })
          }
        }
      }).catch(ferr => {
          alert ('firebase err')
        })
    
      console.log('Logged into Facebook!', res)
      console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
      for (var key in res){
        console.log (key + ":", res[key])
      }
    
      console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
          
    })
    .catch(e => console.log('Error logging into Facebook', e));
      
  }
   
  emailSignIn(){
    this.password=Md5.hashStr(this.password);
    // console.log(this.password)
    this.angularFireAuth.auth.signInWithEmailAndPassword(this.email,this.password).then(signedInData => {
      console.log(signedInData)
      this.navCtrl.setRoot(UserHomePage, {
        email: this.email
      });
    }).catch(err => {
      console.log(err);
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
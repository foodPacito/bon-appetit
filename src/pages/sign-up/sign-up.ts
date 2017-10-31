import { UserHomePage } from './../user-home/user-home';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { AngularFireDatabase } from 'angularfire2/database';
import { Md5 } from 'ts-md5/dist/md5';
import { SignInPage } from './../sign-in/sign-in'



@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  restaurantsList = [];
  usersList = [];
  restName; 
  name ;
  email ;
  password ;
  itemsRef;
  phone;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public angularFireAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private fb: Facebook,private toast: ToastController) {
  }

  ionViewWillEnter(){
  // when the page is ready
    // get the restaurants from the database 
    this.db.list('/restaurants').valueChanges().subscribe( data => {
      if (this.restaurantsList.length === 0){
        for (var i = 0; i < data.length; i++){
          this.restaurantsList.push([data[i]['name'],data[i]['email']])
        }
      }
      })
    
    // get the users from the database
    this.db.list('/Users').valueChanges().subscribe( data => {
      if (this.usersList.length === 0){
        for (var i = 0; i < data.length; i++){
          this.usersList.push(data[i]['email'])
        }
      }
      
      // check if there's a user already signed in
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // if there, check if the user is a customer
          for(var i = 0; i < this.usersList.length; i++){    
            if (user.email === this.usersList[i]){
              // if yes, go the user home page
              this.navCtrl.setRoot(UserHomePage, {
                email: user.email
              });
            }
          }
          
          // if not a customer, check if he is a restaurant
          for (var i = 0; i < this.restaurantsList.length; i++){
            if (user.email === this.restaurantsList[i][1]){
              this.restName = this.restaurantsList[i][0]
              // if yes, go to the restaurant home page
              this.navCtrl.setRoot(HomePage, {
                restName: this.restName
              })
            }
          }
        } else {
            // No user is signed in.
          }
      });       
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
          }).catch(ferr => {
            alert ('firebase err')
          })
        })
        .catch(e => console.log('Error logging into Facebook', e));
      
  }

  emailSignUp() {
        this.password=Md5.hashStr(this.password);
        // console.log(this.password)
        this.angularFireAuth.auth.createUserWithEmailAndPassword(this.email, this.password).then(signUpData=>{
          this.itemsRef = this.db.object('Users/' + this.phone);
          this.itemsRef.set(  
            { firstName: this.name,
              email: this.email,
              password: this.password,
              phone: this.phone
            })
            
              let toast = this.toast.create({
                message: 'You\'ve signedUp successfully',
                duration: 2000,
                position: 'top'
              });
              toast.present();
            
          
          this.navCtrl.setRoot(SignInPage)
        }).catch(err => {
          this.toast.create({
              message: err.message,
              duration: 6000
          }).present();
          });
      }
      goToLogIn() {
        this.navCtrl.push(SignInPage);
      }
      
}

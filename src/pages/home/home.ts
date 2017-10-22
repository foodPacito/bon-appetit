import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestMealsPage } from '../rest-meals/rest-meals'
import { RequestsPage } from '../requests/requests';
import { MealsPage } from '../meals/meals';
import { AngularFireDatabase } from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth';
import { SignInPage } from '../sign-in/sign-in';
import { RestReviewsPage } from '../rest-reviews/rest-reviews';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  restName;
  restInfo = {};
  avRating;
  raters;
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase, private angularFireAuth: AngularFireAuth) {
    this.restName = navParams.get('restName');

    this.db.list('/restaurants/'+ this.restName).valueChanges().subscribe( data => {
      console.log("+++++++++++")
      console.log(data)
      console.log('=============================')
      if(typeof data[0] === 'object'){
        this.restInfo['rating'] = [];
        this.restInfo['reviews'] = [];
      this.restInfo['name'] = data[4];
      this.restInfo['image'] = data[6];
      this.restInfo['phone'] = data[5];
      for (var key in data[7]){
      this.restInfo['rating'].push(data[7][key])}
      for (var key in data[8]){
        this.restInfo['reviews'].push(data[8][key])}
      console.log(this.restInfo)} else {
          this.restInfo['rating'] = [];
          this.restInfo['reviews'] = [];
        this.restInfo['name'] = data[3];
        this.restInfo['image'] = data[5];
        this.restInfo['phone'] = data[4];
        for (var key in data[6]){
        this.restInfo['rating'].push(data[6][key])
        for (var key in data[7]){
          this.restInfo['reviews'].push(data[7][key])}}
      }
      var total = 0
      for (var i = 0; i < this.restInfo['rating'].length; i++){
         total += this.restInfo['rating'][i].rating
      }
      this.avRating = total/this.restInfo['rating'].length
      this.raters = this.restInfo['rating'].length
    })
  }

  googleLogout(){
    this.angularFireAuth.auth.signOut()
    console.log('logout from google');
    this.navCtrl.setRoot(SignInPage)
  }
  
  revPage() {
    this.navCtrl.push(RestReviewsPage, {
      restInfo: this.restInfo
    })
  }

  reqPage(){
    console.log("hi")
    this.navCtrl.push(RequestsPage);
  };
  mealPage(){
    this.navCtrl.push(MealsPage, {
      restName: this.restName
    })
  }

}

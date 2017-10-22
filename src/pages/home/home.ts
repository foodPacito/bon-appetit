import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestMealsPage } from '../rest-meals/rest-meals'
import { RequestsPage } from '../requests/requests';
import { MealsPage } from '../meals/meals';
import { AngularFireDatabase } from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth';
import { SignInPage } from '../sign-in/sign-in';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  restName;
  restInfo = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase, private angularFireAuth: AngularFireAuth) {
    this.restName = navParams.get('restName');

    this.db.list('/restaurants/'+ this.restName).valueChanges().subscribe( data => {
      console.log(data)
      console.log('=============================')
      if(typeof data[0] === 'object'){
      this.restInfo['name'] = data[3];
      this.restInfo['image'] = data[5];
      this.restInfo['phone'] = data[4];} else {
        this.restInfo['name'] = data[2];
        this.restInfo['image'] = data[4];
        this.restInfo['phone'] = data[3];
      }
    })
  }

  googleLogout(){
    this.angularFireAuth.auth.signOut()
    console.log('logout from google');
    this.navCtrl.setRoot(SignInPage)
  }
  
  goToMealsPage () {
  	this.navCtrl.push(RestMealsPage)
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

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestMealsPage } from '../rest-meals/rest-meals'

/**
 * Generated class for the UserHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-home',
  templateUrl: 'user-home.html',
})
export class UserHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToMealsPage () {
  	this.navCtrl.push(RestMealsPage)
  }
  
}

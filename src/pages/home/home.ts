import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestMealsPage } from '../rest-meals/rest-meals'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToMealsPage () {
  	this.navCtrl.push(RestMealsPage)
  }
}

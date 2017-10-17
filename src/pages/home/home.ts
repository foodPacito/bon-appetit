import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestMealsPage } from '../rest-meals/rest-meals'
import { RequestsPage } from '../requests/requests';
import { MealsPage } from '../meals/meals';

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
  reqPage(){
    console.log("hi")
    this.navCtrl.push(RequestsPage);
  };
  mealPage(){
    this.navCtrl.push(MealsPage)
  }
}

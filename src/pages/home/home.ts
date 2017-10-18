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
<<<<<<< HEAD
=======

  
  goToMealsPage () {
  	this.navCtrl.push(RestMealsPage)
  }
>>>>>>> 2e495ff2870f92d0ffb4a011b2362ce73cf22d75
  reqPage(){
    console.log("hi")
    this.navCtrl.push(RequestsPage);
  };
  mealPage(){
    this.navCtrl.push(MealsPage)
  }

}

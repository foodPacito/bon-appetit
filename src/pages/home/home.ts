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
>>>>>>> f637e52c44eccfdf21a67e3001923d944065c4d5
  reqPage(){
    console.log("hi")
    this.navCtrl.push(RequestsPage);
  };
  mealPage(){
    this.navCtrl.push(MealsPage)
  }

}

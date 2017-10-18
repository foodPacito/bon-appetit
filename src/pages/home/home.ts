import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RequestsPage } from '../requests/requests';
import { MealsPage } from '../meals/meals';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  fake

  constructor(public navCtrl: NavController) {

  }
reqPage(){
  this.navCtrl.push(RequestsPage);
};
mealPage(){
  this.navCtrl.push(MealsPage)
}
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrderPage } from '../order/order';

/**
 * Generated class for the RestMealsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-rest-meals',
  templateUrl: 'rest-meals.html',
})
export class RestMealsPage {
  restaurant;
  availList;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.restaurant = this.navParams.get('resturant');
    this.availList=Object.keys(this.restaurant.available);
    console.log(this.availList);
  }
  order() {
    // console.log(this.restaurant);
  	this.navCtrl.push(OrderPage);
  }

}

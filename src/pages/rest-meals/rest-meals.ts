import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrderPage } from '../order/order';

// Firas
import { AngularFireDatabase } from 'angularfire2/database'
// Firas

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
  
  // Firas
  rate;
  comment;
  user;
  // Firas
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    // Firas
    private db: AngularFireDatabase
    // Firas
  ) {
  }

  ionViewDidLoad() {
    this.restaurant = this.navParams.get('resturant');
    // Firas
    this.user = this.navParams.get('user');
    // Firas
    this.availList=Object.keys(this.restaurant.available);
     console.log(this.restaurant)
    console.log(this.availList);
  }
  order() {
    // console.log(this.restaurant);  
  	this.navCtrl.push(OrderPage);
  }
  
  // Firas
  rateRes(){
    console.log(this.rate, this.comment)
    this.db.object('/restaurants/'+this.restaurant.name+'/rating/'+this.user.phone).set({
      email : this.user.email,
      rating: this.rate
    })
    
    if (this.comment) {
    this.db.object('/restaurants/'+this.restaurant.name+'/reviews/'+this.user.phone).set({
      email : this.user.email,
      review: this.comment
    })
  }

    this.comment = ""

    }
  // Firas
}

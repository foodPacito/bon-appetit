import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RestReviewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rest-reviews',
  templateUrl: 'rest-reviews.html',
})
export class RestReviewsPage {
restInfo;
reviews = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.restInfo = navParams.get('restInfo')
    console.log(this.restInfo.rating)
    for (var i = 0; i < this.restInfo.reviews.length; i++){
      this.reviews.push({email: this.restInfo.reviews[i].userEmail, text: this.restInfo.reviews[i].review})
      console.log(this.reviews)
    }
    for (var i = 0; i < this.restInfo.rating.length; i++){
      for (var j = 0; j < this.reviews.length; j++){
        if (this.restInfo.rating[i].userEmail === this.reviews[j].email){
          this.reviews[j]['rating'] = this.restInfo.rating[i].rating
        }
      }
    }
    console.log('reviews' , this.reviews , "====================")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestReviewsPage');
  }

}

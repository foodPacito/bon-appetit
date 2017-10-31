import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-requests',
  templateUrl: 'requests.html',
})
export class RequestsPage {

  restInfo;
  orders = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.restInfo = this.navParams.get('restInfo')
    
    for (var key in this.restInfo.orders){
      this.orders.push(this.restInfo.orders[key])
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestsPage');
  }

}

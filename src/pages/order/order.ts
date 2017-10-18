import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HandPickPage } from '../hand-pick/hand-pick';
import { DelivaryPage } from '../delivary/delivary';
/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }
  handPick(){
  	this.navCtrl.push(HandPickPage);
  }
  delivary(){
  	this.navCtrl.push(DelivaryPage);
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the MealsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meals',
  templateUrl: 'meals.html',
})
export class MealsPage {

Meals= [ ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MealsPage');
  }
addMeal(name, numbers){
// this.Meals.push([name,numbers])
this.Meals.push([name, numbers])
this.storage.set('meal', this.Meals)

}
ionViewDidEnter(){
  this.storage.get('meal').then((val) => {
    if(val){
    console.log(val)
    for (var i=0; i<val.length;i++){
    this.Meals.push(val[i])
  }}}
)
}
}

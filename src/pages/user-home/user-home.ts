import { MapPage } from './../map/map';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestMealsPage } from '../rest-meals/rest-meals'
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the UserHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-home',
  templateUrl: 'user-home.html',
})
export class UserHomePage {
  resList;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase) {
  }
  ionViewWillEnter () {
    this.db.list('/restaurants').valueChanges().subscribe(res => {
      this.resList = res;
      console.log(this.resList)
    });
  }

  navToMap() {
    this.navCtrl.push(RestMealsPage);
  }

  getKeysNum (obj) {
    return Object.keys(obj).length;
  }
  goToMealsPage (rest) {
    this.navCtrl.push(RestMealsPage, {resturant: rest});
  }
  goToMapPage(rest){
    this.navCtrl.push(MapPage,{resturant: rest});
  }
  
}

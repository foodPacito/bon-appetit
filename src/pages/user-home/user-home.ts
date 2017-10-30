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
  usersList = [];
  email;
  user;
  
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

    this.db.list('/Users').valueChanges().subscribe( data => {
      if (this.usersList.length === 0){
        console.log(data)
        console.log('=============================')
        for (var i = 0; i < data.length; i++){
          this.usersList.push([data[i]['firstName'],data[i]['email'],data[i]['phone']])
        }
        console.log(this.usersList)
      }


    this.email = this.navParams.get('email')

    for(var i = 0; i < this.usersList.length; i++){      
      if (this.email === this.usersList[i][1]){
        this.user = this.usersList[i]
        console.log("found", this.user)
      }
    }
    })
    
  }

  navToMap() {
    this.navCtrl.push(RestMealsPage);
  }

  getKeysNum (obj) {
    return Object.keys(obj).length;
  }
  goToMealsPage (rest) {
    this.navCtrl.push(RestMealsPage, {resturant: rest, 
      // Firas
      user: {
      email: this.email,
      phone: this.user[2]
    }
    // Firas
  });
  }
  goToMapPage(rest){
    this.navCtrl.push(MapPage,{resturant: rest});
  }
  
}

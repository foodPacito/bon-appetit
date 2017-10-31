import { MapPage } from './../map/map';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestMealsPage } from '../rest-meals/rest-meals'
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-user-home',
  templateUrl: 'user-home.html',
})
export class UserHomePage {
  resList;
  usersList = [];
  email;
  user;
  rating;
  raters
  
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

  goToMealsPage(rest,user) {
    this.navCtrl.push(RestMealsPage, {
    rest: rest,
    user: {
      name: user[0],
      email: user[1],
      phone: user[2]
    }
  });
  }

  getKeysNum (obj) {
    return Object.keys(obj).length;
  }

  getRating(name){
    var total = 0

    for (var i = 0; i < this.resList.length; i++){
      if (this.resList[i].name === name){
        console.log('found the res')
        console.log(this.resList[i])
        for (var key in this.resList[i]['rating']){
          console.log(this.resList[i])
          total += this.resList[i]['rating'][key].rating
       }
       console.log(total, 'total  ')
       this.rating = total/Object.keys(this.resList[i]['rating']).length
       this.raters = Object.keys(this.resList[i]['rating']).length
      }
    }
    return this.rating.toFixed(1)
  }
  goToMapPage(rest){
    this.navCtrl.push(MapPage,{resturant: rest});
  }
}
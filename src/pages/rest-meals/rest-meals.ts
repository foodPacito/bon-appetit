import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

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
  usersList;
  email;
  user;
  orderslist;
  sendtorest;
  selectedmeal;
  buttonClicked: boolean = false;
  selected;
  butOrderClicked: boolean=false;
  obj;
  //randOrderNum

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    this.restaurant = this.navParams.get('resturant');
    this.availList=Object.keys(this.restaurant.available);
    console.log(this.restaurant)
    console.log(this.availList);
    //geting user information from (user-homepage)
    this.user = this.navParams.get('user')
    console.log('----------------------------------')
    console.log(this.user)
    console.log('----------------------------------')
    this.db.list('/restaurants/'+ this.restaurant.name +'/orders').valueChanges().subscribe( res => {
      console.log(res)
    })
    
    this.orderslist=Object.keys(this.restaurant.orders);
    console.log('ionViewDidLoad OrderPage');
    console.log(this.orderslist)
    console.log(this.restaurant)
    console.log('ionViewDidLoad OrderPage');
  }

  
  order() {
  this.butOrderClicked= !this.butOrderClicked
  
  }

  handPickClick(){
    this.buttonClicked = !this.buttonClicked;
  }
  handPick(){
    // for(var i=0; i<100; i++){
    //   let randOrderNum=Math.floor(Math.random()*1000);
    //   }
    this.sendtorest= this.orderslist
    console.log(this.sendtorest)
    console.log(this.selected)
    const orderItem=this.db.list('/restaurants/'+this.restaurant.name+'/orders/'+name)
    orderItem.push({meal:this.selected,
      email:this.user[1],
      meals :this.selectedmeal})
   console.log('----------------------------------')
   console.log(orderItem);
    // this.db.object('/restaurants/'+this.restName+'/available/'+name)
    // const itemsRef = this.db.object('//');
    // itemsRef.update( { orders: 'fffff' });
    // itemsRef.push({ orders: 'dddddddddddddd' });
    // this.sendtorest.push({
    //   name:'hhhhhhhhhhhh'
    // })
  	// this.navCtrl.push(HandPickPage);
  }
  delivary(){
  	// this.navCtrl.push(DelivaryPage);
  }

}

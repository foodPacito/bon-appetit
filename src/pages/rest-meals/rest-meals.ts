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
  address;
  restaurant;
  availList;
  usersList;
  email;
  user;
  orderslist;
  sendtorest;
  selectedmeal;
  buttonClicked: boolean = false;
  selectedTime;
  butOrderClicked: boolean=false;
  obj;
  //randOrderNum

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase) { }
  
  // Firas
  rate;
  comment;

  ionViewDidLoad() {
    this.restaurant = this.navParams.get('rest');
    // Firas
    this.user = this.navParams.get('user');
    // Firas
    this.availList=Object.keys(this.restaurant.available);
    console.log(this.restaurant)
    console.log("Availables:",this.availList);
    //geting user information from (user-homepage)
    // this.user = this.navParams.get('user')
    console.log('----------------------------------')
    console.log(this.user)

    console.log('----------------------------------')
    this.db.list('/restaurants/'+ this.restaurant.name +'/orders').valueChanges().subscribe( res => {
      console.log(res)
    })
    
    // this.orderslist=Object.keys(this.restaurant.orders);
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
    const orderItem=this.db.list('/restaurants/'+this.restaurant.name+'/orders/')
    orderItem.push({time:this.selectedTime,
      phone: this.user.phone,
      name:this.user.name,
      meals :this.selectedmeal,
      method: 'Hand pick'})
   console.log('--------------  --------------------')
   console.log(orderItem);
   console.log('the number is :',this.restaurant.available[this.selectedmeal].quantity)
   

  let newNum = this.restaurant.available[this.selectedmeal].quantity   - 1

  if (newNum === 0) {
    this.db.object('/restaurants/'+this.restaurant.name+'/available/'+this.selectedmeal).remove();
    
  } else {
    this.db.object('/restaurants/'+this.restaurant.name+'/available/'+this.selectedmeal).set({
      name: this.selectedmeal,
      quantity: newNum
    })
  }
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
    const orderItem=this.db.list('/restaurants/'+this.restaurant.name+'/orders/')
    orderItem.push({
      phone: this.user.phone,
      name:this.user.name,
      meals :this.selectedmeal,
      method: 'Delivary',
      address: this.address})

      let newNum = this.restaurant.available[this.selectedmeal].quantity   - 1
      
        if (newNum === 0) {
          this.db.object('/restaurants/'+this.restaurant.name+'/available/'+this.selectedmeal).remove();
          
        } else {
          this.db.object('/restaurants/'+this.restaurant.name+'/available/'+this.selectedmeal).set({
            name: this.selectedmeal,
            quantity: newNum
          })
        }
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

    this.comment = null;

    }
  // Firas
}

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
  obj;
  delevarClicked: boolean = false;
  //randOrderNum
  rate;
  comment;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase) { }
  
  // Firas


  ionViewDidLoad() {
    this.restaurant = this.navParams.get('rest');
    // Firas
    this.user = this.navParams.get('user');
    // Firas
    // this.availList=Object.keys(this.restaurant.available);
    //passig the list of available meals (available) to show them in html page
    this.db.list('/restaurants/'+ this.restaurant.name +'/available').valueChanges().subscribe(data=>{ 
      this.availList=data
      console.log('available:',this.availList)
      console.log(this.restaurant.menu)
      for (var i =  0; i < this.availList.length; i++){
        for (var key in this.restaurant.menu){
          if (this.availList[i]['name'] === this.restaurant.menu[key]['name']){
            this.availList[i]['pic'] = this.restaurant.menu[key]['pic']
          }
        }
      }
    })
    for (var key in this.restaurant['rating']){
      if (this.user['email'] === this.restaurant['rating'][key]['email']){
        this.rate = this.restaurant['rating'][key]['rating']
      }
    }
    this.availList=Object.keys(this.restaurant.available);
    //geting user information from (user-homepage)
    // this.user = this.navParams.get('user')
    console.log('----------------------------------')
    // console.log(this.user)

  
    console.log('----------------------------------')
    this.db.list('/restaurants/'+ this.restaurant.name +'/orders').valueChanges().subscribe( res => {
      console.log(res)
    })
    
    // this.orderslist=Object.keys(this.restaurant.orders);
  }

  handPickClick(){
    this.buttonClicked = !this.buttonClicked;
    this.delevarClicked= false;    
  }
  delivaryClick(){
    this.delevarClicked= !this.delevarClicked;
    this.buttonClicked = false;
  }

  //take the meal chosen from user ad pass it to selectmeals function
  public selectmeals(mealchosen){
    this.selectedmeal= mealchosen;
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
      meals :this.selectedmeal.name,
      method: 'Hand pick'})

  let newNum = this.restaurant.available[this.selectedmeal.name].quantity   - 1

  if (newNum === 0) {
    this.db.object('/restaurants/'+this.restaurant.name+'/available/'+this.selectedmeal.name).remove();

    // this.db.object('/restaurants/'+this.restaurant.pic+'/available/'+this.selectedmeal).remove();

      } else {
    this.db.object('/restaurants/'+this.restaurant.name+'/available/'+this.selectedmeal.name).set({
      name: this.selectedmeal.name,
      pic: this.selectedmeal.pic,
      quantity: newNum
    })

    this.navCtrl.pop()
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
      meals :this.selectedmeal.name,
      method: 'Delivary',
      address: this.address})

      let newNum = this.restaurant.available[this.selectedmeal.name].quantity   - 1
      
        if (newNum === 0) {
          this.db.object('/restaurants/'+this.restaurant.name+'/available/'+this.selectedmeal.name).remove();
          
        } else {
          this.db.object('/restaurants/'+this.restaurant.name+'/available/'+this.selectedmeal.name).set({
            name: this.selectedmeal.name,
            quantity: newNum
          })
        }

        this.navCtrl.pop()
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
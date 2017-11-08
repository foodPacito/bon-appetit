import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
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
  rate;
  comment;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase,
    private toast: ToastController) { }

  ionViewDidLoad() {
    this.restaurant = this.navParams.get('rest');
    // Firas
    this.user = this.navParams.get('user');
    // Firas
    this.db.list('/restaurants/'+ this.restaurant.name +'/available').valueChanges().subscribe(data=>{ 
      this.availList=data;
      //Firas
      for (var i =  0; i < this.availList.length; i++){
        for (var key in this.restaurant.menu){
          if (this.availList[i]['name'] === this.restaurant.menu[key]['name']){
            this.availList[i]['pic'] = this.restaurant.menu[key]['pic'];
          }
        }
      }
      //Firas
    });
    for (var key in this.restaurant['rating']){
      if (this.user['email'] === this.restaurant['rating'][key]['email']){
        this.rate = this.restaurant['rating'][key]['rating'];
      }
    }
    if (this.restaurant.available){
    this.availList=Object.keys(this.restaurant.available);
    }
    this.db.list('/restaurants/'+ this.restaurant.name +'/orders').valueChanges().subscribe( res => {
      console.log(res);
    });
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
    let toast = this.toast.create({
      message: 'Your meal (' + mealchosen.name + ') have been chosen' ,
      duration: 3000,
      position: 'top'
    });
    toast.present();
    return;
  }
  
  handPick(){
    this.sendtorest= this.orderslist;
    const orderItem=this.db.list('/restaurants/'+this.restaurant.name+'/orders/');
    orderItem.push({time:this.selectedTime,
      phone: this.user.phone,
      name:this.user.name,
      meals :this.selectedmeal.name,
      method: 'Hand pick'});

  let newNum = this.restaurant.available[this.selectedmeal.name].quantity   - 1;

  if (newNum === 0) {
    this.db.object('/restaurants/'+this.restaurant.name+'/available/'+this.selectedmeal.name).remove();
      } else {
    this.db.object('/restaurants/'+this.restaurant.name+'/available/'+this.selectedmeal.name).set({
      name: this.selectedmeal.name,
      quantity: newNum
    });

      }
      this.navCtrl.pop();
      
  }
  delivary(){
    const orderItem=this.db.list('/restaurants/'+this.restaurant.name+'/orders/');
    orderItem.push({
      phone: this.user.phone,
      name:this.user.name,
      meals :this.selectedmeal.name,
      method: 'Delivary',
      address: this.address});

      let newNum = this.restaurant.available[this.selectedmeal.name].quantity   - 1;
      
        if (newNum === 0) {
          this.db.object('/restaurants/'+this.restaurant.name+'/available/'+this.selectedmeal.name).remove();
          
        } else {
          this.db.object('/restaurants/'+this.restaurant.name+'/available/'+this.selectedmeal.name).set({
            name: this.selectedmeal.name,
            quantity: newNum
          });
        }

        this.navCtrl.pop();
  }
  
  // Firas
  rateRes(){
    this.db.object('/restaurants/'+this.restaurant.name+'/rating/'+this.user.phone).set({
      email : this.user.email,
      rating: this.rate
    });
    
    if (this.comment) {
    this.db.object('/restaurants/'+this.restaurant.name+'/reviews/'+this.user.phone).set({
      email : this.user.email,
      review: this.comment
    });
  }

    this.comment = null;

    }
  // Firas
}
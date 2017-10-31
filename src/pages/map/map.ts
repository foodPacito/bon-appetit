import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireDatabase } from 'angularfire2/database'


declare var google :any;

let position;
@Component({
 selector: 'page-map',
 templateUrl: 'map.html',
})

  export class MapPage {
   @ViewChild('map') mapElement:ElementRef;
   map: any;
   restaurant 
   restName;
   locationss
  //  location;
  //  latitude;
  //  longitude;

constructor( 
public navCtrl: NavController,
public navParams: NavParams,
 public geolocation: Geolocation,
 private db: AngularFireDatabase) { 
  // this.restName = this.navParams.get('restName')
  // this.latitude=this.navParams.get('location.latitude')
  // this.longitude=this.navParams.get('location.longitude')
  // console.log(this.restName)
  // console.log(this.latitude)
  // console.log(this.latitude)
  

  // this.db.list('/restaurants/'+ this.restName +'/available').valueChanges().subscribe( data => {
  //   // console.log(data)
  //   // console.log('=============================')
    
  // })

}  initMap(){
this.restaurant = this.navParams.get('resturant');
this.locationss=(this.restaurant.location.latitude);
console.log(this.restaurant);
console.log(this.locationss);

this.geolocation.getCurrentPosition().then((position) => {

 let location = new google.maps.LatLng(this.restaurant.location.latitude, this.restaurant.location.longitude);

   let mapOptions = {
     center: location,
     zoom: 20,
     mapTypeId: google.maps.MapTypeId.ROADMAP
    
   }

   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

 });

}

ionViewDidLoad() {
   this.initMap();
    //     ///console.log(this.mapRef);
    //     this.showMap();
    //   }
   console.log('your page ionViewDidLoad');
}



 addMarker(){
 
  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
  });


    let content = "<h4>Information..</h4>";        
 
  this.addInfoWindow(marker, content);
 
}

addInfoWindow(marker, content){
 
  let infoWindow = new google.maps.InfoWindow({
    content: content
  });
 
  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  });
 
}

}


///////////////google.maps.event.addListener(window, 'load', initMap);
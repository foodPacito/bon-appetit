// import { Component, ViewChild , ElementRef } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
// ///import { Geolocation } from 'ionic-native';

// /**
//  * Generated class for the MapPage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */
// declare var google :any;

// @IonicPage()
// @Component({
//   selector: 'page-map',
//   templateUrl: 'map.html',
// })
// export class MapPage {
// 	@ViewChild('map') mapRef: ElementRef;


//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }

// showMap() {
//   //location

//  //const location = new google.maps.LatLng(31.95638607801807, 35.94535052776337);  
//    //map options
//  const options = {
//    center: location,
//    zoom : 15,
//    streetViewControl : false,
//    mapTypeId :'terrain'///'hybrid' ////'satellite' ///'roadmap'
//  };
//  const map = new google.maps.Map(this.mapRef.nativeElement, options);
//    setTimeout(() => map.setMapTypeId('satellite'),3000);

//  this.addMarker(location, map);
// var marker= new google.maps.Marker({
//   position :location,
//   title : "Roro"
// });
// marker.setMap(map);
// }
//   ionViewDidLoad() {
//     ///console.log(this.mapRef);
//     this.showMap();
//   }

// addMarker(position, map) {
// 	return new google.maps.Marker({
// 		position,
// 		map
// 	});
// }
// } 
//  // MapPage(){
//  //    this.navCtrl.push(MapPage);
//  //  }
//  // In the following example, markers appear when the user clicks on the map.
// // Each marker is labeled with a single alphabetical character.
// var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var labelIndex = 0;

// function initialize() {
//   // var lat= 31.95638607801807;
//   // var lng= 35.94535052776337;
//   var location = { lat:31.95638607801807, lng:35.94535052776337};
     

//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 20,
//     center: location,
//     streetViewControl : false,
//     mapTypeId :'terrain'
//   });

//   // This event listener calls addMarker() when the map is clicked.
//   google.maps.event.addListener(map, 'click', function(event) {
//     addMarker(event.latLng, map);
//   });

//   // Add a marker at the center of the map.
//         addMarker(location, map);
// }

// // Adds a marker to the map.
// function addMarker(location, map) {
//   // Add the marker at the clicked location, and add the next-available label
//   // from the array of alphabetical characters.
//   var marker = new google.maps.Marker({
//     position: location,
//     label: labels[labelIndex++ % labels.length],
//     map: map
//   });
// }

// google.maps.event.addDomListener(window, 'load', initialize);
/////////////kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk//////////////////////
// import { Component } from '@angular/core';
// import { NavController, Platform } from 'ionic-angular';
// import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng } from 'ionic-native';
 
// @Component({
//   selector: 'map-page',
//   templateUrl: 'map.html'
// })
// export class MapPage {
 
//     map: GoogleMap;
 
//     constructor(public navCtrl: NavController, public platform: Platform) {
//         platform.ready().then(() => {
//             this.loadMap();
//         });
//     }
 
//     loadMap(){
 
//         let location = new GoogleMapsLatLng(-34.9290,138.6010);
 
//         this.map = new GoogleMap('map', {
//           'backgroundColor': 'white',
//           'controls': {
//             'compass': true,
//             'myLocationButton': true,
//             'indoorPicker': true,
//             'zoom': true
//           },
//           'gestures': {
//             'scroll': true,
//             'tilt': true,
//             'rotate': true,
//             'zoom': true
//           },
//           'camera': {
//             'latLng': location,
//             'tilt': 30,
//             'zoom': 15,
//             'bearing': 50
//           }
//         });
 
//         this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
//             console.log('Map is ready!');
//         });
 
//     }
// }
//////////////////kkkkkkkkkkkkkkkkkkkkkkk///////////////////
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GoogleMaps, 
         GoogleMap,
        //// CameraPosition,
         LatLng,
         GoogleMapsEvent,
         Marker,
         MarkerOptions } from '@ionic-native/google-maps';
import { CameraPosition } from '@ionic-native/google-maps'
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;

  constructor(public navCtrl: NavController,
              private _googleMaps: GoogleMaps,
              private _geoLoc: Geolocation) {

  }

  ngAfterViewInit(){
    let loc: LatLng;
    this.initMap();
    

    //once the map is ready move
    //camera into position
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        //Get User location
      this.getLocation().then( res => {
      //Once location is gotten, we set the location on the camera.
        loc = new LatLng(res.coords.latitude, res.coords.longitude);
        this.moveCamera(loc);

        this.createMarker(loc, "Me").then((marker: Marker) => {
          marker.showInfoWindow();
        }).catch(err => {
          console.log(err);
        });
        
      }).catch( err => {
        console.log(err);
      });
    
    });
  }

  //Load the map 
  initMap(){
    let element = this.mapElement.nativeElement;
    ///this.map = this._googleMaps.create(element)
    this.map = new GoogleMap(this.mapElement, mapOptions);


  }

  //Get current user location
  //Returns promise
  getLocation(){
    return this._geoLoc.getCurrentPosition();
  }


//Moves the camera to any location
  moveCamera(loc: LatLng){
     let options: CameraPosition = {
        //specify center of map
        target: loc,
        zoom: 15,
        tilt: 10 
      }
      this.map.moveCamera(options)
  }

  //Adds a marker to the map
  createMarker(loc: LatLng, title: string){
    let markerOptions: MarkerOptions = {
      position: loc,
      title: title
    }; 
    
    return  this.map.addMarker(markerOptions);
  }


}
import { Component,ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google :any;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
	@ViewChild('map') mapRef: ElementRef;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    ///console.log(this.mapRef);
    this.showMap();
  }
showMap() {
	//location

 //const location = new google.maps.LatLng(31.95638607801807, 35.94535052776337);	
 	//map options
 const options = {
 	center: location,
 	zoom : 15,
 	streetViewControl : false,
 	mapTypeId :'terrain'///'hybrid' ////'satellite' ///'roadmap'
 };
 const map = new google.maps.Map(this.mapRef.nativeElement, options);
 	setTimeout(() => map.setMapTypeId('satellite'),3000);

 this.addMarker(location, map);
var marker= new google.maps.Marker({
  position :location,
  title : "Roro"
});
marker.setMap(map);
}
addMarker(position, map) {
	return new google.maps.Marker({
		position,
		map
	});
}
} 
 // MapPage(){
 //    this.navCtrl.push(MapPage);
 //  }
 // In the following example, markers appear when the user clicks on the map.
// Each marker is labeled with a single alphabetical character.
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;

function initialize() {
  var lat= 31.95638607801807;
  var lng= 35.94535052776337;
  var location = { lat:lat, lng:lng};
     

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 20,
    center: location,
    streetViewControl : false,
    mapTypeId :'terrain'
  });

  // This event listener calls addMarker() when the map is clicked.
  google.maps.event.addListener(map, 'click', function(event) {
    addMarker(event.latLng, map);
  });

  // Add a marker at the center of the map.
        addMarker(location, map);
}

// Adds a marker to the map.
function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map
  });
}

google.maps.event.addDomListener(window, 'load', initialize);


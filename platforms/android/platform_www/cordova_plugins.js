cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "es6-promise-plugin.Promise",
    "file": "plugins/es6-promise-plugin/www/promise.js",
    "pluginId": "es6-promise-plugin",
    "runs": true
  },
  {
    "id": "cordova-plugin-geofence.TransitionType",
    "file": "plugins/cordova-plugin-geofence/www/TransitionType.js",
    "pluginId": "cordova-plugin-geofence",
    "clobbers": [
      "TransitionType"
    ]
  },
  {
    "id": "cordova-plugin-geofence.geofence",
    "file": "plugins/cordova-plugin-geofence/www/geofence.js",
    "pluginId": "cordova-plugin-geofence",
    "clobbers": [
      "geofence"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.geolocation",
    "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "navigator.geolocation"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.PositionError",
    "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
    "pluginId": "cordova-plugin-geolocation",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.cordova-plugin-googlemaps",
    "file": "plugins/cordova-plugin-googlemaps/www/googlemaps-cdv-plugin.js",
    "pluginId": "cordova-plugin-googlemaps",
    "clobbers": [
      "cordova-plugin-googlemaps"
    ]
  },
  {
    "id": "cordova-plugin-facebook4.FacebookConnectPlugin",
    "file": "plugins/cordova-plugin-facebook4/www/facebook-native.js",
    "pluginId": "cordova-plugin-facebook4",
    "clobbers": [
      "facebookConnectPlugin"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "com.googlemaps.ios": "2.4.0",
  "cordova-plugin-add-swift-support": "1.7.0",
  "cordova-plugin-console": "1.1.0",
  "cordova-plugin-device": "1.1.4",
  "es6-promise-plugin": "4.1.0",
  "cordova-plugin-geofence": "0.7.0",
  "cordova-plugin-geolocation": "2.4.3",
  "cordova-plugin-googlemaps": "1.4.5",
  "cordova-plugin-facebook4": "1.9.1",
  "cordova-plugin-whitelist": "1.3.1"
};
// BOTTOM OF METADATA
});
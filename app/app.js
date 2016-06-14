import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})

export class MyApp {
  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) {
    //this.rootPage = TabsPage;
    console.log("hello world 1");
    //this.logToDom('Hello world AA');

    platform.ready().then(() => {
      
      


      var delegate = new cordova.plugins.locationManager.Delegate();


      delegate.didDetermineStateForRegion = function (pluginResult) {

          console.log('[DOM] didDetermineStateForRegion: ' + JSON.stringify(pluginResult));

          cordova.plugins.locationManager.appendToDeviceLog('[DOM] didDetermineStateForRegion: '
              + JSON.stringify(pluginResult));
      };

      delegate.didStartMonitoringForRegion = function (pluginResult) {
          console.log('didStartMonitoringForRegion:', pluginResult);

          //logToDom('didStartMonitoringForRegion:' + JSON.stringify(pluginResult));
      };

      delegate.didRangeBeaconsInRegion = function (pluginResult) {
          console.log('[DOM] didRangeBeaconsInRegion: ' + JSON.stringify(pluginResult));
      };

      var uuid = 'B9407F30-F5F8-466E-AFF9-25556B57FE6D'; //Purple
      var identifier = 'Purple iBeacon';
      var minor = 7181;
      var major = 44956;
      var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);

      cordova.plugins.locationManager.setDelegate(delegate);

      // required in iOS 8+
      cordova.plugins.locationManager.requestWhenInUseAuthorization(); 
      // or cordova.plugins.locationManager.requestAlwaysAuthorization()

      cordova.plugins.locationManager.startMonitoringForRegion(beaconRegion)
          .fail(function(e) { console.error(e); })
          .done();
     
   
  
   // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
   
   });
   
  }
  
    logToDom(message) {
          var e = document.createElement('label');
          e.innerText = message;

          var br = document.createElement('br');
          var br2 = document.createElement('br');
          document.body.appendChild(e);
          document.body.appendChild(br);
          document.body.appendChild(br2);

          window.scrollTo(0, window.document.height);
      };
}  


ionicBootstrap(MyApp)

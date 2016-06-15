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
  
  static beaconPurple() {
      var uuid = 'B9407F30-F5F8-466E-AFF9-25556B57FE6D'; //Purple
      var identifier = 'Purple iBeacon';
      var minor = 7181;
      //var minor = 9999;
      var major = 44956;
      var beacon = new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);
      return beacon;
  }

  constructor(platform) {
    //this.rootPage = TabsPage;
    console.log("hello world 1");
    //this.logToDom('Hello world AA');

    platform.ready().then(() => {

      var delegate = new cordova.plugins.locationManager.Delegate();
        
      delegate.didEnterRegion = function(result) {
          console.log('didEnterRegion: '+ JSON.stringify(result.region));
      };

      delegate.didExitRegion = function(result) {
          console.log('didEnterRegion: '+ JSON.stringify(result.region));
      };

      delegate.didDetermineStateForRegion = function(result) {
          console.log('didDetermineStateForRegion: '+ JSON.stringify(result));
      };

      delegate.didRangeBeaconsInRegion = function(result) {
          console.log('didRangeBeaconsInRegion: '+ JSON.stringify(result.region));
      };

      delegate.didStartMonitoringForRegion = function(result) {
        console.log('didStartMonitoringForRegion: '+ JSON.stringify(result.region));
      };

      cordova.plugins.locationManager.setDelegate(delegate);
      
      // required in iOS 8+
      cordova.plugins.locationManager.requestWhenInUseAuthorization(); 
      // or cordova.plugins.locationManager.requestAlwaysAuthorization()

      //var beaconRegion = this.beaconPurple();
      
      var uuidA = 'B9407F30-F5F8-466E-AFF9-25556B57FE6D'; //Purple
      var identifierA = 'Purple iBeacon';
      var majorA = 44956;
      var minorA = 7181;
      var beaconA = new cordova.plugins.locationManager.BeaconRegion(identifierA, uuidA, majorA, minorA);
      
      
      var uuidB = 'B9407F30-F5F8-466E-AFF9-25556B57FE6D'; //Green
      var identifierB = 'Green iBeacon';
      var majorB = 64648;
      var minorB = 3710;
      var beaconB = new cordova.plugins.locationManager.BeaconRegion(identifierB, uuidB, majorB, minorB);
      
      
      var uuidC = 'B9407F30-F5F8-466E-AFF9-25556B57FE6D'; //Blue
      var identifierC = 'Blue iBeacon';
      var majorC = 18413;
      var minorC = 41133;
      var beaconC = new cordova.plugins.locationManager.BeaconRegion(identifierC, uuidC, majorC, minorC);
      

    var beacons = [beaconA, beaconB, beaconC];
    for (var i = 0; i < beacons.length; i++) {
        var beacon = beacons[i];
        cordova.plugins.locationManager.startMonitoringForRegion(beacon);
        cordova.plugins.locationManager.startRangingBeaconsInRegion(beacon);
    }

/*
      cordova.plugins.locationManager.startMonitoringForRegion(beaconA)
          .fail(function(e) { console.error(e); })
          .done(function()
          {
            cordova.plugins.locationManager.stopMonitoringForRegion(beaconA)
              .fail(function(e) { console.error(e); })
              .done(function()
              {
                setTimeout(function() {
                  cordova.plugins.locationManager.startMonitoringForRegion(beaconB)
                      .fail(function(e) { console.error(e); })
                      .done(function()
                  {
                    cordova.plugins.locationManager.stopMonitoringForRegion(beaconB)
                      .fail(function(e) { console.error(e); })
                      .done(function()
                      {
                          setTimeout(function() {
                              cordova.plugins.locationManager.startMonitoringForRegion(beaconC)
                            .fail(function(e) { console.error(e); })
                            .done(function() 
                            {
                              cordova.plugins.locationManager.stopMonitoringForRegion(beaconC)
                                .fail(function(e) { console.error(e); })
                                .done(function() { console.log("finished"); });
                          }, 5000);
                      });
                  }, 5000);
                });
              });
            });
          });
        */
     
   
  
   // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
   
   });
   
  }
   
}  

function logToDom(message) {
          var e = document.createElement('label');
          e.innerText = message;

          var br = document.createElement('br');
          var br2 = document.createElement('br');
          document.body.appendChild(e);
          document.body.appendChild(br);
          document.body.appendChild(br2);

          window.scrollTo(0, window.document.height);
      };


ionicBootstrap(MyApp)

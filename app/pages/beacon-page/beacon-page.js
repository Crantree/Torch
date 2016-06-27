import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/beacon-page/beacon-page.html'
})
export class BeaconPage {
  static get parameters() {
    return [[NavController], [Platform]];
  }

  constructor(_navController, platform) {
      this._navControler = _navController;
      
      this.canLog = false;
      this.logs = ["111", "222"];
      this.log('starting beacon page');

      this.id = "";
      this.region = "???";
      this.currentRegion = "???";
      this.leftRegion = "-";
      this.regionState = "";
      this.fullRegion = "";
      this.inRange = [];
      this.logged = "nothing logged";
      this.message = "";
      
      platform.ready().then(() => {
        if(window.cordova)
        {
          this.message = 'Ranging for beacons:';
          this.startBeacons();
          this.rangeForBeacons();
        }
        else {
          this.message = "Beacons not supported";
        }
      });

      
      
      
      //this.log("constructor::");

      this.time = new Date();  
      setInterval(() => this.time = new Date(), 1000);
  }

  /*
  ionViewWillEnter(){
   this.region = "started...";
  }
  */

  rangeForBeacons()
  {
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
        
      var uuidD = 'B9407F30-F5F8-466E-AFF9-25556B57FE6D'; //Blue
      var identifierD = 'Rainbow';
      var beaconD = new cordova.plugins.locationManager.BeaconRegion(identifierD, uuidD);
        

    cordova.plugins.locationManager.startRangingBeaconsInRegion(beaconD);
    this.log("start ranging");
/*
      var beacons = [beaconB, beaconA, beaconC];
      for (var i = 0; i < beacons.length; i++) {
          var beacon = beacons[i];
          //cordova.plugins.locationManager.startMonitoringForRegion(beacon);
          cordova.plugins.locationManager.startRangingBeaconsInRegion(beacon);
      }
    */
  }

  log(m){
    //this.logged = this.logged.concat(m); // + "<br/><br/>" + this.logged;
    //this.logs.push(m);
    if(this.canLog)
    {
      if(this.logs && this.logs.length > 5)
      {
        this.logs.pop();
      }
      this.logs.splice(0, 0, m);
      console.log(m);
    }
  }

  startBeacons()
  {
    this.log("request Authorisation: before");
    // required in iOS 8+
      cordova.plugins.locationManager.requestAlwaysAuthorization();
      //cordova.plugins.locationManager.requestWhenInUseAuthorization(); 
      // or cordova.plugins.locationManager.requestAlwaysAuthorization()
      this.log("request Authorisation: after");
      var delegate = new cordova.plugins.locationManager.Delegate();
        
      delegate.didEnterRegion = (result) => {
        this.currentRegion = result.region.identifier;
        this.leftRegion = "-";
          this.log('didEnterRegion: '+ JSON.stringify(result.region));
      };

      delegate.didExitRegion = (result) => {
        //this.currentRegion = "-";
        this.leftRegion = result.region.identifier;
          this.log('didEnterRegion: '+ JSON.stringify(result.region));
      };

      delegate.didDetermineStateForRegion = (result)  =>{
        //this.region = result.region.identifier;
        this.regionState = result.state;
          this.log('didDetermineStateForRegion: '+ JSON.stringify(result));
      };

      delegate.didRangeBeaconsInRegion = (result) => {
          this.didRangeBeaconsInRegion = result.region.identifier;
          this.region = result.region.identifier;
          this.fullRegion;
          this.inRange = result.beacons;
          this.log('didRangeBeaconsInRegion: '+ JSON.stringify(result));
      };

      delegate.didStartMonitoringForRegion = (result) => {
        this.log('didStartMonitoringForRegion: '+ JSON.stringify(result.region));
      };

      delegate.didChangeAuthorizationStatus = (result) =>
      {
        this.log('didChangeAuthorizationStatus: '+ JSON.stringify(result));
      }

      cordova.plugins.locationManager.setDelegate(delegate);
      this.log('set delegate');
      

      //var beaconRegion = this.beaconPurple();
      
      
    
  }
}

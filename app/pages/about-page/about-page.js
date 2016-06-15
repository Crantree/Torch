import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/about-page/about-page.html'
})
export class AboutPage {
  static get parameters() {
    return [[NavController]];
  }

  //time: Date;
  /*
  id : String;
  currentRegion : String;
  leftRegion : String;
  region : String;
  regionState : String;
  didRangeBeaconsInRegion : String;
  beacons = [1, 2, 3];
*/
  constructor(_navController) {
      //this._navControler = _navController;
      //Platform.ready().then(() => {
      this.startBeacons();
      //});
      this.id = "";
      this.region = "???";
      this.currentRegion = "???";
      this.leftRegion = "-";
      this.regionState = "";


      this.time = new Date();  
      setInterval(() => this.time = new Date(), 1000);
  }

  /*
  ionViewWillEnter(){
   this.region = "started...";
  }
  */

  startBeacons()
  {
      
      var delegate = new cordova.plugins.locationManager.Delegate();
        
      delegate.didEnterRegion = (result) => {
        this.currentRegion = result.region.identifier;
        this.leftRegion = "-";
          console.log('didEnterRegion: '+ JSON.stringify(result.region));
      };

      delegate.didExitRegion = (result) => {
        //this.currentRegion = "-";
        this.leftRegion = result.region.identifier;
          console.log('didEnterRegion: '+ JSON.stringify(result.region));
      };

      delegate.didDetermineStateForRegion = (result)  =>{
        //this.region = result.region.identifier;
        this.regionState = result.state;
          console.log('didDetermineStateForRegion: '+ JSON.stringify(result));
      };

      delegate.didRangeBeaconsInRegion = (result) => {
          this.didRangeBeaconsInRegion = result.region.identifier;
          this.region = result.region.identifier;
          console.log('didRangeBeaconsInRegion: '+ JSON.stringify(result.region));
      };

      delegate.didStartMonitoringForRegion = (result) => {
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
        

      var beacons = [beaconB, beaconA, beaconC];
      for (var i = 0; i < beacons.length; i++) {
          var beacon = beacons[i];
          //cordova.plugins.locationManager.startMonitoringForRegion(beacon);
          cordova.plugins.locationManager.startRangingBeaconsInRegion(beacon);
      }
    
    
  }
}

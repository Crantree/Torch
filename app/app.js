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
    this.rootPage = TabsPage;
    console.log("hello world 1");
    //this.logToDom('Hello world AA');
    this.beacons = [];

    platform.ready().then(() => {
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

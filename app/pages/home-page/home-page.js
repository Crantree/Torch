import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {GuidelinesPage} from '../guidelines-page/guidelines-page';

@Component({
  templateUrl: 'build/pages/home-page/home-page.html'
})
export class HomePage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(_navController) {
    this._navController = _navController;
  }

  goToGuidelinesPage(){
    this._navController.push(GuidelinesPage);
  }
}

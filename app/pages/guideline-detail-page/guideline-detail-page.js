import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/guideline-detail-page/guideline-detail-page.html'
})
export class GuidelineDetailPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(_navController, _navParams) {
    this._navController = _navController;
    this._navParams = _navParams;
  }

  ionViewWillEnter(){
    this.guideline = this._navParams.data.selectedGuideline;
  }

  goBack(){
    this._navController.pop();
  }
}

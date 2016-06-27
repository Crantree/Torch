import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {GuidelineDetailPage} from '../guideline-detail-page/guideline-detail-page';

@Component({
  templateUrl: 'build/pages/guidelines-page/guidelines-page.html'
})
export class GuidelinesPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(_navController) {
    this._navController = _navController;
  }

  ionViewWillEnter(){
    let guidelines = [];
    guidelines.push('Difficult Airways Guidelines');
    guidelines.push('Medicine Guidelines');
    guidelines.push('Staff Guidelines');
    guidelines.push('Communication Guidelines');
    guidelines.push('Pre-natal guidelines');
    this.guidelines = guidelines;
  }

  selectGuideline(guideline){
    this._navController.push(GuidelineDetailPage, {selectedGuideline: guideline})
  }
}
